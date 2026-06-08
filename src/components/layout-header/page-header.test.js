import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import PageHeader from "./layout-header.vue";

const mount = createMount(PageHeader);

describe("page-header", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
