import { describe, expect, it } from "vitest";
import { divTwoNumbers } from ".";

describe("Div", () => {
  it("should divide two numbers correctly", () => {
    const result = 6 / 3;
    const sum = divTwoNumbers(6, 3);
    expect(sum).toBe(result);
  });
});
