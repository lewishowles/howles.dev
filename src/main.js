import "@/assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import components from "@lewishowles/components";
import i18n from "@/i18n";

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(components);
app.mount("#app");
