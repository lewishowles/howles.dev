import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconDatabase from "./icon-database.vue";

const mount = createMount(IconDatabase);

describe("icon-database", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
