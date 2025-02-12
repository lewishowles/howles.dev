import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconTesting from "./project-icon-testing.vue";

const mount = createMount(ProjectIconTesting);

describe("project-icon-testing", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
