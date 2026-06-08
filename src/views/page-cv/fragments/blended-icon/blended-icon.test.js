import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vite-plus/test";
import BlendedIcon from "./blended-icon.vue";

const defaultProps = { icon: "icon-chevron-down" };
const mount = createMount(BlendedIcon, { props: defaultProps });

describe("blended-icon", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
