import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import components from "@lewishowles/components";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(components);
app.mount("#app");
