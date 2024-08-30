import WelcomeBento from "./welcome-bento.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(WelcomeBento);

describe("welcome-bento", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("welcome-bento").shouldBeVisible();
	});
});
