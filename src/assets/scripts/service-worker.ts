declare var self: ServiceWorkerGlobalScope;

const prefix = 'OSW';
const cacheName = `${prefix}-v1`;
const OFFLINE_URL = `${import.meta.env.BASE_URL}offline.html`;

function putCache(event, cache, res) {
  const url = new URL(event.request.url);

  if(url.origin === location.origin) {
    cache.put(event.request, res);
  }
}

self.addEventListener('install', (event: FetchEvent) => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);

    await cache.addAll([
      OFFLINE_URL
    ]);
  })());

  self.skipWaiting();

  console.log('sw installed');
});

self.addEventListener('activate', (event: FetchEvent) => {
  event.waitUntil((async () => {
    if (self.registration.navigationPreload) {
      // await self.registration.navigationPreload.enable();
    }

    const names = await caches.keys();

    Promise.all(names.map((name) => {
      if(name.startsWith(prefix) && name !== cacheName) {
        console.log('sw remove old cache' + cacheName);

        return caches.delete(name);
      }
    }));
  })());

  self.clients.claim();

  console.log('sw activated');
});

self.addEventListener('fetch', (event: FetchEvent) => {
  console.log('sw intercept');

  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const responseCache = await cache.match(event.request);

    if(responseCache) {
      return responseCache;
    }

    try {
      // const preloadResponse = await event.preloadResponse;
  
      // if(preloadResponse) {
      //   putCache(event, cache, preloadResponse.clone());

      //   return preloadResponse;
      // }

      const fetchResponse = await fetch(event.request);

      if(fetchResponse) {
        putCache(event, cache, fetchResponse.clone());
      }
  
      return fetchResponse;
    } catch (error) {
      // Only call event.respondWith() if this is a navigation request for an HTML page.
      if (event.request.mode === "navigate") {
        console.log("Fetch failed; returning offline page instead.", error);

        const offlineResponse = cache.match(OFFLINE_URL);

        return offlineResponse;
      }
    }
  })());
});

export default null;
