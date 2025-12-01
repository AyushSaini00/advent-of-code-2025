import { describe, it, expect } from "vitest";
import { actualPasswordStep1, actualPasswordStep2 } from "../main.js";

describe("actualPasswordStep1()", () => {
  // original input
  it("should return correct password for input.txt", () => {
    const res = actualPasswordStep1("./../input.txt");
    expect(res).toBe(1076);
  });

  // this input was present in question description
  it("should return correct password for 01_test_input.txt", () => {
    const res = actualPasswordStep1("./__test__/test_inputs/01_test_input.txt");
    expect(res).toBe(3);
  });

  /**
   * explaination for this input: we have L150 & R1
   * L150 is equivalent to L51 (as 150 = 1 * 99 + 51)
   * after L51, curr would be at 99
   * now R1 would bring curr to 0, hence count would be incremented to 1
   */
  it("should return correct password for 02_test_input.txt", () => {
    const res = actualPasswordStep1("./__test__/test_inputs/02_test_input.txt");
    expect(res).toBe(1);
  });
});

describe("actualPasswordStep2()", () => {
  // original input
  it("should return correct password for input.txt", () => {
    const res = actualPasswordStep2("./../input.txt");
    expect(res).toBe(6379);
  });

  // this input was present in question description
  it("should return correct password for 01_test_input.txt", () => {
    const res = actualPasswordStep2("./__test__/test_inputs/01_test_input.txt");
    expect(res).toBe(6);
  });

  it("should return correct password for 03_test_input.txt", () => {
    const res = actualPasswordStep2("./__test__/test_inputs/03_test_input.txt");
    expect(res).toBe(10);
  });
});
