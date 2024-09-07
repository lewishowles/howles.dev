import { createMount } from "@cypress/support/mount";
import { getApiUrl } from "@/api";
import PaddockStatus from "./paddock-status.vue";
import breachData from "./fixtures/breach.json";
import sampleData from "./fixtures/default.json";

const mount = createMount(PaddockStatus);

describe("paddock-status", () => {
	it("A component is rendered", () => {
		cy.intercept(getApiUrl("paddock-status"), sampleData);

		mount();

		cy.getByData("paddock-status").shouldBeVisible();
		cy.getByData("paddock-status-status").shouldBeVisible().shouldHaveText("Secure");
		cy.getByData("paddock-status-markers").shouldBeVisible().find("li").shouldHaveCount(35);
	});

	it("A failed load is handled", () => {
		cy.intercept(getApiUrl("paddock-status"), { statusCode: 500 });

		mount();

		cy.getByData("paddock-status-status").shouldBeVisible().shouldHaveText("Unknown");
		cy.getByData("paddock-status-markers").shouldNotBeVisible();
	});

	it("An active breach handled", () => {
		cy.intercept(getApiUrl("paddock-status"), breachData);

		mount();

		cy.getByData("paddock-status-status").shouldBeVisible().shouldHaveText("Breach");
		cy.getByData("paddock-status-markers").shouldBeVisible().find("li").shouldHaveCount(1);
	});
});
