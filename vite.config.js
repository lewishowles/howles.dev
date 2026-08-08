import { alias } from "./support/aliases.js";
import { createSiteIcons } from "./support/site-icons.js";
import { componentsResolver } from "@lewishowles/components/resolver";
import { defineConfig, lazyPlugins } from "vite-plus";
import Components from "unplugin-vue-components/vite";
import VueRouter from "vue-router/vite";
import fmt from "./.oxfmtrc.json" with { type: "json" };
import lint from "./.oxlintrc.json" with { type: "json" };
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	fmt,
	lint,
	plugins: lazyPlugins(() => [
		VueRouter({
			dts: false,
		}),
		createSiteIcons(),
		Components({
			dts: false,
			// Automatically resolve components and layout components.
			dirs: ["src/components", "src/layout", "src/views"],
			// Automatically resolve components in the component library.
			resolvers: [componentsResolver()],
		}),
		tailwindcss(),
		vue(),
		vueDevTools(),
	]),
	resolve: {
		alias,
	},
});
