import BentoBox from "./bento-box.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(BentoBox);

describe("bento-box", () => {
	it("A component is rendered", () => {
		mount();

		cy.getByData("bento-box").shouldBeVisible();
	});

	it("Default padding is added", () => {
		mount();

		cy.getByData("bento-box").shouldHaveClass("px-6").shouldHaveClass("py-5");
	});

	it("Horizontal padding overrides the default", () => {
		mount({ attrs: { class: "px-2" } });

		cy.getByData("bento-box")
			.shouldHaveClass("px-2")
			.shouldHaveClass("py-5")
			.shouldNotHaveClass("px-6");
	});

	it("Vertical padding overrides the default", () => {
		mount({ attrs: { class: "py-2" } });

		cy.getByData("bento-box")
			.shouldHaveClass("px-6")
			.shouldHaveClass("py-2")
			.shouldNotHaveClass("py-5");
	});

	it("General padding overrides defaults", () => {
		mount({ attrs: { class: "p-2" } });

		cy.getByData("bento-box")
			.shouldHaveClass("p-2")
			.shouldNotHaveClass("px-6")
			.shouldNotHaveClass("py-5");
	});
});
