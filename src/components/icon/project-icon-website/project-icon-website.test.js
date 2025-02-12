import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import ProjectIconWebsite from "./project-icon-website.vue";

const mount = createMount(ProjectIconWebsite);

describe("project-icon-website", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
