import CreateProject from "./create-project.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(CreateProject);

describe("create-project", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("create-project").shouldBeVisible();
	});

	it("The appropriate elements are visible", () => {
		mount();

		cy.getByData("create-project-form").shouldBeVisible();
		cy.getByData("form-input").shouldBeVisible();
		cy.getByData("radio-group").shouldBeVisible();
		cy.getByData("ui-button").shouldBeVisible();
	});

	it("An error message is shown if no name is provided", () => {
		mount();

		cy.getByData("form-error").should("not.exist");

		cy.getByData("ui-button").click();

		cy.getByData("form-error").shouldBeVisible();
	});

	it.only("A success message is shown when creating a project", () => {
		mount();

		cy.fillFormField("form-input", "Project name");

		cy.getByData("ui-button").click();

		cy.getByData("create-project-success").shouldBeVisible();
		cy.getFormField("form-input").shouldHaveValue("");
	});
});
