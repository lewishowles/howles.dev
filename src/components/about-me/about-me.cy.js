import AboutMe from "./about-me.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(AboutMe);

describe("about-me", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("about-me").shouldBeVisible();
	});
});
