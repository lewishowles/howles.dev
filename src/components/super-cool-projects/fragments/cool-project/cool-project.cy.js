import CoolProject from "./cool-project.vue";
import { createMount } from "@cypress/support/mount";

const defaultSlots = { "title": "Project title", "default": "Primary content", "link-text": "Link text" };
const defaultProps = { icon: "icon-project-website" };
const mount = createMount(CoolProject, { slots: defaultSlots, props: defaultProps });

describe("cool-project", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("cool-project").shouldBeVisible();
	});
});
