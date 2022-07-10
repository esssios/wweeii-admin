import "@/styles/index.scss";
import "uno.css";
import '@icon-park/vue-next/styles/index.css';
import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";
import App from "./App.vue";

const app = createApp(App);
setupStore(app);
setupRouter(app);

app.mount("#app");
