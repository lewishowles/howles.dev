import CoreValue from "./core-value.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CoreValue);

describe("core-value", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("core-value").shouldBeVisible();
	});
});
