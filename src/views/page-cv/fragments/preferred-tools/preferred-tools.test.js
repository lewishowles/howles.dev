import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PreferredTools from "./preferred-tools.vue";

const mount = createMount(PreferredTools);

describe("preferred-tools", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
