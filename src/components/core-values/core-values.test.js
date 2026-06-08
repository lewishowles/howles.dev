import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import CoreValues from "./core-values.vue";

const mount = createMount(CoreValues);

describe("core-values", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
