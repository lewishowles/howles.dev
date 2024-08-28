import ThemeSelector from "./theme-selector.vue";
import { createMount } from "@cypress/support/mount";

const mount = createMount(ThemeSelector);

describe("theme-selector", () => {
	it("Renders a theme selector", () => {
		mount();

		cy.getByData("theme-selector").shouldBeVisible();
	});

	describe("Interaction", () => {
		it("The theme menu can be opened", () => {
			mount();

			openMenu();

			cy.getByData("theme-selector-button")
				.shouldBeVisible()
				.shouldHaveCount(3);
		});

		it("Dark mode can be selected", () => {
			mount();

			cy.get("html").shouldNotHaveClass("dark");

			openMenu();

			cy.getByData("theme-selector-button").contains("Dark mode").click();

			cy.get("html").shouldHaveClass("dark");
		});

		it("Clicking outside of the theme menu closes it", () => {
			mount();

			createSiblingElement("Click target", "click-target");

			openMenu();

			cy.getByData("theme-selector-button").shouldBeVisible();

			cy.get("body").click();

			cy.getByData("theme-selector-button").shouldNotBeVisible();

			cy.getByData("click-target").then(element => {
				element.remove();
			});
		});

		it("Pressing escape when focused inside the theme menu closes it", () => {
			mount();

			openMenu();

			cy.getByData("theme-selector-button").shouldBeVisible();
			cy.getByData("theme-selector-button").eq(0).focus();

			cy.realPress("Escape");

			cy.getByData("theme-selector-button").shouldNotBeVisible();
		});
	});
});

function openMenu() {
	cy.getByData("summary-details-summary").click();
}

/**
 * Create an element beside the currently mounted component by adding it to the
 * body.
 *
 * @param  {string}  content
 *     The content of the element
 * @param  {string}  selector
 *     The `data-test` selector for the element
 */
function createSiblingElement(content, selector) {
	cy.get("body").then(body => {
		const siblingElement = document.createElement("div");

		siblingElement.setAttribute("data-test", selector);
		siblingElement.innerText = content;

		body.append(siblingElement);
	});
}
