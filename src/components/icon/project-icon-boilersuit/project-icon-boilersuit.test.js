import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconBoilersuit from "./project-icon-boilersuit.vue";

const mount = createMount(ProjectIconBoilersuit);

describe("project-icon-boilersuit", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
