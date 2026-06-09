import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import ProjectTypePill from "./project-type-pill.vue";

const mount = createMount(ProjectTypePill);

describe("project-type-pill", () => {
	describe("Initialisation", () => {
		test("A Vue component should exist", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
