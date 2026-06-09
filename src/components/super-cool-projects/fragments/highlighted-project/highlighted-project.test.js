import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import HighlightedProject from "./highlighted-project.vue";

const defaultProps = { icon: "project-icon-website", href: "https://howles.dev" };
const mount = createMount(HighlightedProject, { props: defaultProps });

describe("highlighted-project", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
