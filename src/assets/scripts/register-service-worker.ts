declare global {
  interface WorkerNavigator {
    serviceWorker: ServiceWorkerContainer;
  }
}


const registerServiceWorker = async () => {
  if('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`);

      console.log("Service worker registered");
    } catch(error) {
      console.log(error);
    }
  }
}

registerServiceWorker();

export {};
