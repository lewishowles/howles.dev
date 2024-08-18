import PageHeader from "./page-header.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(PageHeader);

describe("page-header", () => {
	it("A header is rendered", () => {
		mount();

		cy.getByData("page-header").shouldBeVisible();
	});
});
