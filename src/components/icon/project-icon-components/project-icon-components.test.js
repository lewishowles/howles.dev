import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import ProjectIconComponents from "./project-icon-components.vue";

const mount = createMount(ProjectIconComponents);

describe("project-icon-components", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
