import { describe, it, expect } from "vitest";
import { countRolls } from "../part-1.js";

describe("countRolls", () => {
  it("countRolls for input: 01_test_input.txt", () => {
    const sum = countRolls("./__test__/test_inputs/01_test_input.txt");
    expect(sum).toBe(13);
  });

  it("countRolls for input: input.txt", () => {
    const sum = countRolls("./../input.txt");
    expect(sum).toBe(1363);
  });
});
