import CreateProject from "./create-project.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CreateProject);

describe("create-project", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("create-project").shouldBeVisible();
	});
});
