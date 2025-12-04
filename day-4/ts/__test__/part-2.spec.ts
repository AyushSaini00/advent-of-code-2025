import { describe, it, expect } from "vitest";
import { totalRollsRemoved } from "../part-2.js";

describe("totalRollsRemoved", () => {
  it("totalRollsRemoved for input: 01_test_input.txt", () => {
    const sum = totalRollsRemoved("./__test__/test_inputs/01_test_input.txt");
    expect(sum).toBe(43);
  });

  it("totalRollsRemoved for input: input.txt", () => {
    const sum = totalRollsRemoved("./../input.txt");
    expect(sum).toBe(8184);
  });
});
