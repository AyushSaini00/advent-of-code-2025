import { describe, it, expect } from "vitest";
import { sumInvalidIdsPart1, sumInvalidIdsPart2 } from "../main.js";

describe("sumInvalidIdsPart1", () => {
  // given in problem statement as example
  it("should return the sum of all invalid Ids in the give input: 01_test_input.txt", () => {
    const sum = sumInvalidIdsPart1("./__test__/test_inputs/01_test_input.txt");
    expect(sum).toBe(1227775554);
  });
});

describe("sumInvalidIdsPart1", () => {
  // given in problem statement as example
  it("should return the sum of all invalid Ids in the give input: 01_test_input.txt", () => {
    const sum = sumInvalidIdsPart2("./__test__/test_inputs/01_test_input.txt");
    expect(sum).toBe(4174379265);
  });
});
