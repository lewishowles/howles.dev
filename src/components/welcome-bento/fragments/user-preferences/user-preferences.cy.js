import UserPreferences from "./user-preferences.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(UserPreferences);

describe("user-preferences", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("user-preferences").shouldBeVisible();
	});

	it("Dark mode can be selected", () => {
		mount();

		cy.get("html").shouldNotHaveClass("dark");

		cy.getByData("form-label").contains("Dark").click();

		cy.get("html").shouldHaveClass("dark");
	});
});
