export default {
  async fetch(request, env) {
    const SECRET = "lazlab2025secure";
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    const url = new URL(request.url);
    const pathname = url.pathname;
    const event = url.searchParams.get('e');
    if (pathname === '/stats') {
      const secret = url.searchParams.get('secret');
      if (!secret || secret !== SECRET) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      const keys = ['visits', 'launch_clicks', 'install_clicks', 'research_opens'];
      const results = {};
      for (const key of keys) {
        const value = await env.JVOX_ANALYTICS.get(key);
        results[key] = parseInt(value || '0');
      }
      return new Response(JSON.stringify(results, null, 2), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    if (pathname === '/track' && event) {
      const allowedEvents = ['visits', 'launch_clicks', 'install_clicks', 'research_opens'];
      if (!allowedEvents.includes(event)) {
        return new Response(JSON.stringify({ error: 'Unknown event' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      const currentValue = await env.JVOX_ANALYTICS.get(event);
      const current = parseInt(currentValue || '0');
      const newCount = current + 1;
      await env.JVOX_ANALYTICS.put(event, String(newCount));
      return new Response(JSON.stringify({ event, count: newCount }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
