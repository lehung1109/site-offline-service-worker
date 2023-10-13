# ACCESS YOUR SITE EVEN YOU ARE OFFLINE

## Demo

[Demo](https://lehung1109.github.io/site-offline-service-worker/dist/)

## Usage

### Build your service worker

1. Clone this repository
2. Change base url in the vite.config.ts to your base url
3. Run ```npm run build```
4. Copy service-worker.js file at the dist/assets/scripts

### Include script file to your app

copy service-worker.js file to the root of the app

offline.html is a required file

- another files
- service-worker.js
- index.html
- offline.html

Create a file js that declare the service worker above

register-sw.js

```js
const registerServiceWorker = async () => {
  if('serviceWorker' in navigator) {
    try {
      console.log("Service worker registering");

      const registration = await navigator.serviceWorker.register(`service-worker.js`);

      console.log("Service worker registered");
    } catch(error) {
      console.log(error);
    }
  } else {
    console.log('SW is not supported');
  }
}

registerServiceWorker();
```

Now, you can access your page offline. Have fun!