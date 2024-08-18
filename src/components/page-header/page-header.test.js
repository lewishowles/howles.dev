import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PageHeader from "./page-header.vue";

const mount = createMount(PageHeader);

describe("page-header", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
