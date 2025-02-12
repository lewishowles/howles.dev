import { createMount } from "@unit/support/mount";
import { describe, expect, test, vi } from "vitest";
import TextToParagraphs from "./text-to-paragraphs.vue";

const mount = createMount(TextToParagraphs);

describe("text-to-paragraphs", () => {
	console.warn = vi.fn();

	describe("Initialisation", () => {
		test("should exist as a Vue component", () => {
			const wrapper = mount();

			expect(wrapper.vm).toBeTypeOf("object");
		});
	});

	describe("Computed", () => {
		describe("paragraphs", () => {
			describe("should discard invalid text", () => {
				test.for([
					["boolean (true)", true],
					["boolean (false)", false],
					["number (positive)", 1],
					["number (negative)", -1],
					["number (NaN)", NaN],
					["string (empty)", ""],
					["object (non-empty)", { property: "value" }],
					["object (empty)", {}],
					["array (non-empty)", [1, 2, 3]],
					["array (empty)", []],
					["null", null],
					["undefined", undefined],
				])("%s", ([, text]) => {
					const wrapper = mount({ text });
					const vm = wrapper.vm;

					expect(vm.paragraphs).toEqual([]);
				});
			});

			test("should handle a single line of text", () => {
				const wrapper = mount({ text: "Single line" });
				const vm = wrapper.vm;

				expect(vm.paragraphs).toEqual(["Single line"]);
			});

			test("should split multiple lines of text", () => {
				const wrapper = mount({ text: "Line one\n\nLine two\n\nLine three" });
				const vm = wrapper.vm;

				expect(vm.paragraphs).toEqual(["Line one", "Line two", "Line three"]);
			});

			test("should ignore a single newline character", () => {
				const wrapper = mount({ text: "Line one\nLine two" });
				const vm = wrapper.vm;

				expect(vm.paragraphs).toEqual(["Line one\nLine two"]);
			});
		});
	});
});
