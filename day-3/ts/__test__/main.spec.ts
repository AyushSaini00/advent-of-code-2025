import { describe, it, expect } from "vitest";
import { getTotalJoltagePart1, getTotalJoltagePart2 } from "../main.js";

describe("getTotalJoltagePart1", () => {
  // given in problem statement as example
  it("should return total joltage for input: 01_test_input.txt", () => {
    const sum = getTotalJoltagePart1(
      "./__test__/test_inputs/01_test_input.txt"
    );
    expect(sum).toBe(357);
  });

  it("should return total joltage for input: input.txt", () => {
    const sum = getTotalJoltagePart1("./../input.txt");
    expect(sum).toBe(16927);
  });
});

describe("getTotalJoltagePart2", (s) => {
  // given in problem statement as example
  it("should return total joltage for input: 01_test_input.txt", () => {
    const sum = getTotalJoltagePart2(
      "./__test__/test_inputs/01_test_input.txt"
    );
    expect(sum).toBe(3121910778619);
  });

  it("should return total joltage for input: input.txt", () => {
    const sum = getTotalJoltagePart2("./../input.txt");
    expect(sum).toBe(167384358365132);
  });
});
