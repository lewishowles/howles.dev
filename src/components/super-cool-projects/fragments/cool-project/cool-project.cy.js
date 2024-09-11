import CoolProject from "./cool-project.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CoolProject);

describe("cool-project", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("cool-project").shouldBeVisible();
	});
});
