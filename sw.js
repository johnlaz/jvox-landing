/**
 * J-VOX Landing — Service Worker
 * Cache-first for offline support. Required for PWA install prompts.
 * Bump CACHE_NAME when deploying new releases.
 */

const CACHE_NAME = 'jvox-landing-v1';

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/jvox_icon.png'
];

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS).catch(() => {
        // Don't fail install if a single asset is missing
        return Promise.all(
          PRECACHE_URLS.map(url => cache.add(url).catch(() => null))
        );
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Pass through analytics worker — never cache
  if (url.hostname.includes('workers.dev') || url.pathname.startsWith('/track') || url.pathname.startsWith('/stats')) {
    return;
  }

  // Network-first + cache for Google Fonts
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          const net = fetch(event.request).then(r => {
            if (r.ok) cache.put(event.request, r.clone());
            return r;
          });
          return cached || net;
        })
      )
    );
    return;
  }

  // Don't intercept /app/ — let the app's own SW handle it
  if (url.pathname.startsWith('/app/') || url.pathname.includes('/app/')) {
    return;
  }

  // Cache-first for everything else
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || event.request.method !== 'GET') return response;
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
