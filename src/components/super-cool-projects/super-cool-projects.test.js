import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CoolProjects from "./super-cool-projects.vue";

const mount = createMount(CoolProjects);

describe("cool-projects", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
