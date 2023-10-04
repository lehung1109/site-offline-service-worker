declare global {
  interface WorkerNavigator {
    serviceWorker: ServiceWorkerContainer;
  }
}


const registerServiceWorker = async () => {
  if('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');

      console.log("Service worker registered");
    } catch(error) {
      console.log(error);
    }
  }
}

registerServiceWorker();

export {};
