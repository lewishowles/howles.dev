import { createMount } from "@cypress/support/mount";
import { getApiUrl } from "@/api";
import HeadlineUsers from "./headline-users.vue";
import sampleData from "./fixtures/users.json";

const mount = createMount(HeadlineUsers);

describe("headline-users", () => {
	it("A component is rendered", () => {
		cy.intercept(getApiUrl("analytics", "users"), sampleData);

		mount();

		cy.getByData("headline-users").shouldBeVisible();
		cy.getByData("headline-users-figure").shouldBeVisible().shouldHaveText("50,159");
		cy.getByData("pill-badge").shouldBeVisible().shouldHaveClass("bg-green-50");
	});

	it("Interaction hints should appear on focus", () => {
		cy.intercept(getApiUrl("analytics", "users"), sampleData);

		mount();

		cy.getByData("headline-users-chevron").shouldNotBeVisible();

		cy.getByData("headline-users").focus();

		cy.getByData("headline-users-chevron").shouldBeVisible();
	});

	it("A failed load is handled", () => {
		cy.intercept(getApiUrl("analytics", "users"), { statusCode: 500 });

		mount();

		cy.getByData("headline-users-figure").shouldBeVisible().shouldHaveText("Error");
	});
});
