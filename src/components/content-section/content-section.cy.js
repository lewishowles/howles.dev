import ContentSection from "./content-section.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(ContentSection);

describe("content-section", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("content-section").shouldBeVisible();
	});
});
