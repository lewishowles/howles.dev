import { createMount } from "@unit/support/mount";
import { describe, expect, test } from "vitest";
import IconFilmReel from "./icon-film-reel.vue";

const mount = createMount(IconFilmReel);

describe("icon-film-reel", () => {
	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});
});
