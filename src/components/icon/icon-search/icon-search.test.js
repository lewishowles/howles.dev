import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconSearch from "./icon-search.vue";

const mount = createMount(IconSearch);

describe("icon-search", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
