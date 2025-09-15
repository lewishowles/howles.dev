import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PageFooter from "./layout-footer.vue";

const mount = createMount(PageFooter);

describe("page-footer", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
