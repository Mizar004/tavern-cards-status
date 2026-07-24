import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

function waitForInit() {
  return new Promise<void>((resolve) => {
    const check = () => {
      if (window.mvuInitialized) {
        resolve();
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
}

waitForInit().then(() => {
  const app = createApp(App);
  app.use(createPinia());
  app.mount('#app');
});
