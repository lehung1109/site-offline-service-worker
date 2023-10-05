declare global {
  interface WorkerNavigator {
    serviceWorker: ServiceWorkerContainer;
  }
}


const registerServiceWorker = async () => {
  if('serviceWorker' in navigator) {
    try {
      console.log("Service worker registering");

      const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`);

      console.log("Service worker registered");
    } catch(error) {
      console.log(error);
    }
  } else {
    console.log('SW is not supported');
  }
}

registerServiceWorker();

export {};
