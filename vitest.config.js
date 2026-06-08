import { fileURLToPath } from "node:url";
import { defineConfig, mergeConfig } from "vite-plus";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: "happy-dom",
			include: ["src/**/*.test.js"],
			root: fileURLToPath(new URL("./", import.meta.url)),
			setupFiles: "./test/unit/setup.js",
		},
	}),
);
