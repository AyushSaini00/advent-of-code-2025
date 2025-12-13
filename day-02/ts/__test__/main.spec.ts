import { describe, it, expect } from "vitest";
import { main } from "../main.js";

describe("day-02", () => {
  // original input
  it("should return the sum of all invalid Ids in the give input: input.txt", () => {
    const res = main("../input.txt");
    expect(res).toMatchObject({ part1Res: 19605500130, part2Res: 36862281418 });
  });

  // test sample
  it("should return the sum of all invalid Ids in the give input: 01_test_input.txt", () => {
    const res = main("./__test__/test_inputs/01_test_input.txt");
    expect(res).toMatchObject({ part1Res: 1227775554, part2Res: 4174379265 });
  });
});
