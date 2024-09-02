import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CreateProject from "./create-project.vue";

const mount = createMount(CreateProject);

describe("create-project", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});