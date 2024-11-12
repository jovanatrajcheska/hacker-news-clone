import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/custom-service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) =>
      console.error("Service Worker Registration Failed:", error)
    );
}

createApp(App).use(router).mount("#app");
