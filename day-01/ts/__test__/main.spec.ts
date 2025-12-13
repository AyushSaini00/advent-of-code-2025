import { describe, it, expect } from "vitest";
import { main } from "../main.js";

describe("day-01", () => {
  // original input
  it("should return correct password for input.txt", () => {
    const res = main("./../input.txt");
    expect(res).toMatchObject({ part1Res: 1076, part2Res: 6379 });
  });

  // test sample
  it("should return correct password for 01_test_input.txt", () => {
    const res = main("./__test__/test_inputs/01_test_input.txt");
    expect(res).toMatchObject({ part1Res: 3, part2Res: 6 });
  });
});
