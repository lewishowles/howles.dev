import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PageCv from "./page-cv.vue";

const mount = createMount(PageCv);

describe("/", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
