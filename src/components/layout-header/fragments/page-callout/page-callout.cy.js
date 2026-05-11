import PageCallout from "./page-callout.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(PageCallout);

describe("page-callout", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("page-callout").shouldBeVisible();
	});
});
