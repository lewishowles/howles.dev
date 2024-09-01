import { describe, expect, test } from "vitest";
import { getApiUrl } from "./get-api-url";

describe("get-api-url", () => {
	describe("should return null if the provided folder is not a non-empty string", () => {
		test.for([
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
		])("%s", ([, folder]) => {
			expect(getApiUrl(folder)).toBe(null);
		});
	});

	test("should use a default filename if not provided", () => {
		expect(getApiUrl("paddock-status")).toBe("/data/paddock-status/default.json");
	});

	describe("should use a default filename if the provided filename is not a non-empty string", () => {
		test.for([
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
		])("%s", ([, filename]) => {
			expect(getApiUrl("paddock-status", filename)).toBe("/data/paddock-status/default.json");
		});
	});

	test("should use a provided filename", () => {
		expect(getApiUrl("paddock-status", "surprise")).toBe("/data/paddock-status/surprise.json");
	});
});
