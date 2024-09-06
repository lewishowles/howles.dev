import { createMount } from "@cypress/support/mount";
import { getApiUrl } from "@/api";
import sampleData from "./fixtures/default.json";

import TeamAccess from "./team-access.vue";

const mount = createMount(TeamAccess);

describe("team-access", () => {
	it("A component is rendered", () => {
		cy.intercept(getApiUrl("users"), sampleData);

		mount();

		cy.getByData("team-access").shouldBeVisible();
	});

	it("The correct number of users are shown", () => {
		cy.intercept(getApiUrl("users"), sampleData);

		mount();

		cy.getByData("team-access-user").shouldHaveCount(1);
	});

	it("An appropriate message is shown if no users are found", () => {
		cy.intercept(getApiUrl("users"), []);

		mount();

		cy.getByData("team-access-none-found").shouldBeVisible();
		cy.getByData("team-access-user").should("not.exist");
	});
});
