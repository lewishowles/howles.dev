import { describe, expect, test, vi } from "vitest";
import useApi from "./use-api";

describe("use-api", () => {
	test("should initialise with isLoading and isReady set to false", () => {
		const { isLoading, isReady } = useApi();

		expect(isLoading.value).toBe(false);
		expect(isReady.value).toBe(false);
	});

	test("should set isLoading to true when load is called", async () => {
		const { isLoading, load } = useApi();
		const mockDataGenerator = vi.fn();

		const loadPromise = load(mockDataGenerator);

		expect(isLoading.value).toBe(true);

		await loadPromise;
	});

	test("should set isReady to true after loading data", async () => {
		const { isReady, load } = useApi();
		const mockDataGenerator = vi.fn();

		await load(mockDataGenerator);

		expect(isReady.value).toBe(true);
	});

	test("should set isLoading to false after load completes", async () => {
		const { isLoading, load } = useApi();
		const mockDataGenerator = vi.fn();

		await load(mockDataGenerator);

		expect(isLoading.value).toBe(false);
	});

	test("should call dataGenerator with provided params", async () => {
		const { load } = useApi();
		const mockDataGenerator = vi.fn();

		const params = [1, 2, 3];

		await load(mockDataGenerator, ...params);

		expect(mockDataGenerator).toHaveBeenCalledWith(...params);
	});

	test("should throw an error if dataGenerator is not a function", async () => {
		const { load } = useApi();
		const invalidDataGenerator = {};

		await expect(load(invalidDataGenerator)).rejects.toThrow("[api/load]: Expected function <dataGenerator>, received <object[0]>");
	});
});
