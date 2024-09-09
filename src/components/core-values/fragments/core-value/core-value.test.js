import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CoreValue from "./core-value.vue";

const mount = createMount(CoreValue);

describe("core-value", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
