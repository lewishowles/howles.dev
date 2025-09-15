import LayoutFooter from "./layout-footer.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(LayoutFooter);

describe("layout-footer", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("layout-footer").shouldBeVisible();
	});

	it("Footer links should have appropriate href values", () => {
		mount();

		cy.getByData("layout-footer-sketch-link").shouldHaveAttribute("href", "https://www.sketch.com/s/d2f29e4f-768f-4696-9b55-12633742a86c");
		cy.getByData("layout-footer-github-link").shouldHaveAttribute("href", "https://github.com/lewishowles/howles.dev");
	});
});
