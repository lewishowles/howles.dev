import "@/assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import GlobalComponents from "@/plugins/global-components";
import components from "@lewishowles/components";
import i18n from "@/i18n";
import router from "@/router";

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);
app.use(components);
app.use(GlobalComponents);
app.mount("#app");
