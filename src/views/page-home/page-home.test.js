import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import PageHome from "./page-home.vue";

const mount = createMount(PageHome);

describe("/", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
