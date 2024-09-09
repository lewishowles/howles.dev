import CoreValues from "./core-values.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CoreValues);

describe("core-values", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("core-values").shouldBeVisible();
	});
});
