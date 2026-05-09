export default {
  async fetch(request, env) {
    // CORS headers — allow requests from your site
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

    // ────────────────────────────────────
    // READ STATS ENDPOINT — /stats?secret=YOUR_SECRET
    // ────────────────────────────────────
    if (pathname === '/stats') {
      const secret = url.searchParams.get('secret');
      
      // Check the secret
    // Temporarily disabled for testing
// if (!secret || secret !== env.STATS_SECRET) {
//   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
//     status: 401,
//     headers: { ...corsHeaders, 'Content-Type': 'application/json' }
//   });
// }

      // Read all tracked events
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

    // ────────────────────────────────────
    // TRACK ENDPOINT — /track?e=event_name
    // ────────────────────────────────────
    if (pathname === '/track' && event) {
      const allowedEvents = ['visits', 'launch_clicks', 'install_clicks', 'research_opens'];

      if (!allowedEvents.includes(event)) {
        return new Response(JSON.stringify({ error: 'Unknown event' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Get current count, increment, and save
      const currentValue = await env.JVOX_ANALYTICS.get(event);
      const current = parseInt(currentValue || '0');
      const newCount = current + 1;

      await env.JVOX_ANALYTICS.put(event, String(newCount));

      return new Response(JSON.stringify({ event, count: newCount }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // ────────────────────────────────────
    // 404 for unknown paths
    // ────────────────────────────────────
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
