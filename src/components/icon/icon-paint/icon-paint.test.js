import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconPaint from "./icon-paint.vue";

const mount = createMount(IconPaint);

describe("icon-paint", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
