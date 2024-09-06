import { fileURLToPath } from "node:url";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: "jsdom",
			include: ["src/**/*.test.js"],
			root: fileURLToPath(new URL("./", import.meta.url)),
			setupFiles: "./test/unit/setup.js",
		},
	}),
);
