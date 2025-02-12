import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconReddit from "./project-icon-reddit.vue";

const mount = createMount(ProjectIconReddit);

describe("project-icon-reddit", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
