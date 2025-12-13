import { describe, it, expect } from "vitest";
import { main } from "../main.js";

describe("day-04", () => {
  it("for input: input.txt", () => {
    const res = main("./../input.txt");
    expect(res).toMatchObject({ part1Res: 1363, part2Res: 8184 });
  });

  it("for input: 01_test_input.txt", () => {
    const res = main("./__test__/test_inputs/01_test_input.txt");
    expect(res).toMatchObject({ part1Res: 13, part2Res: 43 });
  });
});
