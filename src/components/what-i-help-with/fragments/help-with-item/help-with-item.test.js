import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import HelpWithItem from "./help-with-item.vue";

const defaultProps = {
	accent: "neon-pink",
	description: "Item description",
	index: "01",
	title: "Item title",
};

const mount = createMount(HelpWithItem, { props: defaultProps });

describe("help-with-item", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
