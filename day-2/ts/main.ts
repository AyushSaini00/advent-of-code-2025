"use strict";

import fs from "node:fs";

// PART 1 SOLUTION
function isInvalidIdPart1(id: number): boolean {
  // sequence of digits repeated twice are invalid ids

  let input = String(id);
  let len = input.length;

  if (len % 2 !== 0) return false;
  // len should also be even for ids to be invalid

  let p1 = 0;
  let p2 = len / 2;

  while (p2 < len) {
    if (input[p1] !== input[p2]) return false;

    p1++;
    p2++;
  }
  return true;
}

export function sumInvalidIdsPart1(filePath = "../input.txt") {
  let sum = 0;

  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const ids = fileContent.split(",");

  for (const id of ids) {
    let [firstId, lastId] = id.split("-");
    firstId = Number(firstId);
    lastId = Number(lastId);

    for (let i = firstId; i <= lastId; i++) {
      if (isInvalidIdPart1(i)) sum += i;
    }
  }

  return sum;
}

// PART 2 SOLUTION
function isInvalidIdPart2(id: number): boolean {
  //invalidId => made ONLY of sequence of digits repeated at least twice
  // eg: 111 is invalid as 1 is repeated 3 times
  // note that 110 is valid.
  let input = String(id);
  const len = input.length;

  if (len <= 1) return false; // let's ignore ids with len <= 1.

  // is input is made by repeated sequences, then input will appear inside (input + input)
  // if input has no repeatations, the only occurance of input in doubled will be at index 0 and index n, so it won't appear in middle slice.

  const doubled = input + input;
  const middle = doubled.slice(1, -1); // removing idx 0 and idx n chars

  return middle.indexOf(input) !== -1;
}

export function sumInvalidIdsPart2(filePath = "../input.txt") {
  let sum = 0;

  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const ids = fileContent.split(",");

  for (const id of ids) {
    let [firstId, lastId] = id.split("-");
    firstId = Number(firstId);
    lastId = Number(lastId);

    for (let i = firstId; i <= lastId; i++) {
      if (isInvalidIdPart2(i)) sum += i;
    }
  }

  return sum;
}

console.log({ sum: sumInvalidIdsPart2() });
