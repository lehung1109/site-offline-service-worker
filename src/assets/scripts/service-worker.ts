self.addEventListener('install', (event: FetchEvent) => {
  console.log('install');
});

self.addEventListener('activate', (event: FetchEvent) => {
  console.log('activate');
});
