import { createApp } from "vue";
import router from "./routes/routes.index";

import { createPinia } from "pinia";
const pinia = createPinia();

import App from "./App.vue";
import "./style.css";

const app = createApp(App);

app.use(pinia).use(router);
app.mount("#app");
