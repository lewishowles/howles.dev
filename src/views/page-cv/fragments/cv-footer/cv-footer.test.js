import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CvFooter from "./cv-footer.vue";

const mount = createMount(CvFooter);

describe("cv-footer", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
