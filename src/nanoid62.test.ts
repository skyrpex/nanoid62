import { describe, expect, it } from "vitest";
import { nanoid62 } from "./nanoid62.ts";

describe("nanoid62", () => {
	it("should generate a random string", () => {
		const id = nanoid62();
		expect(id).toBeTypeOf("string");
		expect(id.length).toBe(22);
	});

	it("should generate a random string with a custom size", () => {
		const id = nanoid62(10);
		expect(id).toBeTypeOf("string");
		expect(id.length).toBe(10);
	});
});
