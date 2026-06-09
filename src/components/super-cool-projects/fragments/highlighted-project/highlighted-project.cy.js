import HighlightedProject from "./highlighted-project.vue";
import { createMount } from "@cypress/support/mount";

const defaultSlots = {
	title: "Project title",
	default: "Primary content",
	"link-text": "Link text",
};

const defaultProps = { icon: "icon-project-website" };
const mount = createMount(HighlightedProject, { slots: defaultSlots, props: defaultProps });

describe("highlighted-project", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("highlighted-project").shouldBeVisible();
	});
});
