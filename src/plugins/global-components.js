import { defineAsyncComponent } from "vue";
import TextToParagraphs from "@/components/text-to-paragraphs/text-to-paragraphs.vue";

// Automatically import any local icon components.
export default {
	install(app) {
		const icons = import.meta.glob("@/components/icon/**/*.vue");

		for (const path in icons) {
			const componentName = path.split("/").pop().replace(/\.\w+$/, "");

			app.component(componentName, defineAsyncComponent(icons[path]));
		}

		// Add individual components.
		app.component("TextToParagraphs", TextToParagraphs);
	},
};
