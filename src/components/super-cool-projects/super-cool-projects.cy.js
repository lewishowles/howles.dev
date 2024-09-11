import CoolProjects from "./super-cool-projects.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CoolProjects);

describe("cool-projects", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("cool-projects").shouldBeVisible();
	});
});
