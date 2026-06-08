import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import IconBranch from "./icon-branch.vue";

const mount = createMount(IconBranch);

describe("icon-branch", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
