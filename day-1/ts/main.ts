"use strict";

import fs from "node:fs";

// step 1 solution
export function actualPasswordStep1(
  filePath = "../input.txt",
  startPositon = 50
) {
  let count = 0;

  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const rotations = fileContent.split("\n").filter((line) => line.trim());

  const [minRange, maxRange] = [0, 99]; // min and max values or dial
  const rangeSize = maxRange - minRange + 1;

  let curr = startPositon; // dial begins at 50

  for (const currRotation of rotations) {
    const direction = currRotation[0];
    const num = Number(currRotation.slice(1)) % rangeSize;

    if (direction === "L") {
      curr = curr - num < minRange ? curr - num + rangeSize : curr - num;
    } else if (direction === "R") {
      curr = curr + num > maxRange ? curr + num - rangeSize : curr + num;
    }

    if (curr === 0) count += 1;
  }

  return count;
}

// step 2 solution
export function actualPasswordStep2(
  //   filePath = "./__test__/test_inputs/01_test_input.txt",
  filePath = "../input.txt",
  startPositon = 50,
  size = 100 // from 0 -> 99 items on dial
) {
  let count = 0;

  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const rotations = fileContent.split("\n").filter((line) => line.trim());

  let pos = startPositon; // curr pointer position on dialer

  for (const currRotation of rotations) {
    const direction = currRotation[0];
    let steps = Number(currRotation.slice(1));

    for (let i = 0; i < steps; i++) {
      if (direction === "R") {
        pos = (pos + 1) % size;
      } else if (direction === "L") {
        pos = (((pos - 1) % size) + size) % size; // to handle negative modulos
      }

      if (pos === 0) count += 1;
    }
  }

  return count;
}

console.log({ password: actualPasswordStep2() });
