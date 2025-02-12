import { defineConfig } from "cypress";
import viteConfig from "./vite.config";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
	fixturesFolder: "",
	screenshotsFolder: "test/cypress/screenshots",
	videosFolder: "test/cypress/videos",
	viewportWidth: 1440,
	viewPortHeight: 900,

	e2e: {
		baseUrl: "http://localhost:5173",
		specPattern: "src/views/**/*.cy.js",
		supportFile: "test/cypress/support/e2e.js",
	},

	component: {
		specPattern: "src/components/**/*.cy.js",
		indexHtmlFile: "test/cypress/support/component-index.html",
		supportFile: "test/cypress/support/component.js",
		devServer: {
			framework: "vue",
			bundler: "vite",
			viteConfig: {
				...viteConfig,
				plugins: [
					vue(),
					vueDevTools(),
				],
			},
		},
		viewportWidth: 1000,
		viewPortHeight: 1000,
	},
});
