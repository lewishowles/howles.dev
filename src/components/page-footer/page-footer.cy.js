import PageFooter from "./page-footer.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(PageFooter);

describe("page-footer", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("page-footer").shouldBeVisible();
	});
});
