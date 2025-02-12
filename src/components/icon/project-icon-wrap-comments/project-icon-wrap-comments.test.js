import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconWrapComments from "./project-icon-wrap-comments.vue";

const mount = createMount(ProjectIconWrapComments);

describe("project-icon-wrap-comments", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
