import { describe, expect, test } from "vitest";
import useApi from "./use-api";

describe("use-api", () => {
	const url = "/data/paddock-status/default.json";

	describe("should throw an error if the provided url is not a non-empty string", () => {
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
		])("%s", async ([, url]) => {
			const { load } = useApi();

			await expect(load(url)).rejects.toThrow();
		});
	});

	test("should initialise with isLoading and isReady set to false", () => {
		const { isLoading, isReady } = useApi();

		expect(isLoading.value).toBe(false);
		expect(isReady.value).toBe(false);
	});

	test("should set isLoading to true when load is called", async () => {
		const { isLoading, load } = useApi();

		const loadPromise = load(url);

		expect(isLoading.value).toBe(true);

		await loadPromise;
	});

	test("should set isReady to true after loading data", async () => {
		const { isReady, load } = useApi();

		await load(url);

		expect(isReady.value).toBe(true);
	});

	test("should set isLoading to false after load completes", async () => {
		const { isLoading, load } = useApi();

		await load(url);

		expect(isLoading.value).toBe(false);
	});
});
