import CoreValue from "./core-value.vue";
import { createMount } from "@cypress/support/mount";

const defaultSlots = { title: "Value title", default: "Primary content" };
const defaultProps = { icon: "icon-snap" };
const mount = createMount(CoreValue, { slots: defaultSlots, props: defaultProps });

describe("core-value", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("core-value").shouldBeVisible();
	});
});
