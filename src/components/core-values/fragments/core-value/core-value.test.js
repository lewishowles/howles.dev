import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import CoreValue from "./core-value.vue";

const defaultProps = { icon: "icon-snap" };
const mount = createMount(CoreValue, { props: defaultProps });

describe("core-value", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
