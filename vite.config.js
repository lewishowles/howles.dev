import { alias } from "./support/aliases.js";
import { defineConfig } from "vite-plus";
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
	plugins: [tailwindcss(), vue(), vueDevTools()],
	resolve: {
		alias,
	},
});
