import { config } from "@vue/test-utils";
import { createApp } from "vue";
import componentLibrary from "@lewishowles/components";

// Create a Vue app instance
const app = createApp({});

// Install your plugin
app.use(componentLibrary);

// Set the global config for Vue Test Utils
config.global.plugins = [componentLibrary];
