self.addEventListener('install', (event: FetchEvent) => {
  console.log('install');
});

self.addEventListener('activate', (event: FetchEvent) => {
  console.log('activate');
});

self.addEventListener('fetch', (event: FetchEvent) => {

  if(event.request.url.includes('sw-data.json')) {
    event.respondWith(Response.json([1,2,3,4]));

    return;
  }

  event.respondWith(fetch(event.request));
});
