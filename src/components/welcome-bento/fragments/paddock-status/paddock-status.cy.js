import PaddockStatus from "./paddock-status.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(PaddockStatus);

describe("paddock-status", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("paddock-status").shouldBeVisible();
	});
});
