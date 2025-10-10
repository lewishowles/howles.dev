import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconMockupSystem from "./project-icon-mockup-system.vue";

const mount = createMount(ProjectIconMockupSystem);

describe("project-icon-mockup-system", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
