import WelcomePartDeux from "./welcome-part-deux.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(WelcomePartDeux);

describe("welcome-part-deux", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("welcome-part-deux").shouldBeVisible();
	});

	it("The correct number of skills are shown", () => {
		mount();

		cy.getByData("welcome-part-deux-skill").shouldHaveCount(11);
	});
});
