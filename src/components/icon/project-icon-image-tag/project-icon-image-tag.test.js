import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconImageTag from "./project-icon-image-tag.vue";

const mount = createMount(ProjectIconImageTag);

describe("project-icon-image-tag", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
