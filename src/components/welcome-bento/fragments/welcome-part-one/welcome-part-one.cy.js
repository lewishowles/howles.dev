import WelcomePartOne from "./welcome-part-one.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(WelcomePartOne);

describe("welcome-part-one", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("welcome-part-one").shouldBeVisible();
	});
});
