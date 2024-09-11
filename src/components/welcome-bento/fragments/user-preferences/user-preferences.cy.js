import UserPreferences from "./user-preferences.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(UserPreferences);

describe("user-preferences", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("user-preferences").shouldBeVisible();
	});

	it("Dark mode is the default", () => {
		mount();

		cy.get("html").shouldHaveClass("dark");
	});

	it("Light mode can be selected", () => {
		mount();

		cy.get("html").shouldNotHaveClass("light");

		cy.getByData("form-label").contains("Light").click();

		cy.get("html").shouldHaveClass("light");
	});
});
