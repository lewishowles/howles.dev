import { createMount } from "@cypress/support/mount";
import { getApiUrl } from "@/api";
import sampleData from "./fixtures/duties.json";

import StaffDuties from "./staff-duties.vue";

const mount = createMount(StaffDuties);

describe("staff-duties", () => {
	it("A component is rendered", () => {
		cy.intercept(getApiUrl("analytics", "duties"), sampleData);

		mount();

		cy.getByData("staff-duties").shouldBeVisible();
		cy.getByData("staff-duties-chart").shouldBeVisible();
		cy.getByData("staff-duties-key").shouldBeVisible();
	});
});
