import ThemeSelector from "./theme-selector.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(ThemeSelector);

describe("theme-selector", () => {
	it("renders", () => {
		mount();
	});
});
