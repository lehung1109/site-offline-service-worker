// Slow the serviceworker down a bit
const start = Date.now();
let i = 0;
while (Date.now() - start < 5000) {
  i++;
};

console.log(i);
console.log('delay done');
console.log('installing');

self.addEventListener('install', (event: FetchEvent) => {
  console.log('install');
});

self.addEventListener('activate', (event: FetchEvent) => {
  console.log('activate');
});
