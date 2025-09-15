import CoolProjects from "./super-cool-projects.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CoolProjects);

describe("cool-projects", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("super-cool-projects").shouldBeVisible();
	});

	it("The correct number of projects and types should appear", () => {
		mount();

		cy.getByData("super-cool-projects-project-type").shouldHaveCount(7);
		cy.getByData("cool-project").shouldHaveCount(21);
	});
});
