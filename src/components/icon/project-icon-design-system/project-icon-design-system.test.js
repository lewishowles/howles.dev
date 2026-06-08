import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import ProjectIconDesignSystem from "./project-icon-design-system.vue";

const mount = createMount(ProjectIconDesignSystem);

describe("project-icon-design-system", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
