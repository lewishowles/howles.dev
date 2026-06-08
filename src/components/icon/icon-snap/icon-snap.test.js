import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import IconSnap from "./icon-snap.vue";

const mount = createMount(IconSnap);

describe("icon-snap", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
