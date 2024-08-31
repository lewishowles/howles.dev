import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PaddockStatus from "./paddock-status.vue";

const mount = createMount(PaddockStatus);

describe("paddock-status", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
