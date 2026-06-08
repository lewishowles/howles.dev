import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import ProjectIconBoilerplate from "./project-icon-boilerplate.vue";

const mount = createMount(ProjectIconBoilerplate);

describe("project-icon-boilerplate", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
