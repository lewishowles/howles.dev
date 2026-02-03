import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconCinewatch from "./project-icon-cinewatch.vue";

const mount = createMount(ProjectIconCinewatch);

describe("project-icon-cinewatch", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
