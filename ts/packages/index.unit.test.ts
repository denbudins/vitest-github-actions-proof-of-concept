import { describe, it, expect } from "vitest";
import { sumTwoNumbers } from ".";

describe("Sum", () => {
  it("should sum two numbers correctly", () => {
    const result = 2 + 3;
    const sum = sumTwoNumbers(2, 3);
    expect(sum).toBe(result);
  });
});
