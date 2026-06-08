import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import PageCallout from "./page-callout.vue";

const mount = createMount(PageCallout);

describe("page-callout", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
