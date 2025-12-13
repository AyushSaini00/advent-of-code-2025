import { describe, it, expect } from "vitest";
import { main } from "../main.js";

describe("day-03", () => {
  it("should return total joltage for input: input.txt", () => {
    const res = main("./../input.txt");
    expect(res).toMatchObject({ part1Res: 16927, part2Res: 167384358365132 });
  });

  it("should return total joltage for input: 01_test_input.txt", () => {
    const res = main("./__test__/test_inputs/01_test_input.txt");
    expect(res).toMatchObject({ part1Res: 357, part2Res: 3121910778619 });
  });
});
