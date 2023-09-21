self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(Response.json(event));
});