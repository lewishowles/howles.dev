import { defineAsyncComponent } from "vue";

// Automatically import any local icon components.
export default {
	install(app) {
		const components = import.meta.glob("../components/icon/*.vue");

		for (const path in components) {
			const componentName = path.split("/").pop().replace(/\.\w+$/, "");

			app.component(componentName, defineAsyncComponent(components[path]));
		}
	},
};
