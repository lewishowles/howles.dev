import LookingForWork from "./looking-for-work.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(LookingForWork);

describe("looking-for-work", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("looking-for-work").shouldBeVisible();
	});
});
