"use strict";

import fs from "node:fs";

// ---- PART: 1 ----
export function getTotalJoltagePart1(filePath = "../input.txt"): number {
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const banks = fileContent.split("\n").filter((bk) => bk.trim());

  let total = 0;

  for (const bank of banks) {
    total += largestJoltageInBankPart1(bank);
  }

  return total;
}

function largestJoltageInBankPart1(bank: string): number {
  const len = bank.length;

  if (len === 2) return Number(bank);
  let max = 0;

  let i = 0;
  let j = 1;

  while (i < j && i < len && j < len) {
    while (j < len) {
      max = Math.max(max, Number(bank[i] + bank[j]));
      j++;
    }

    i += 1;
    j = i + 1;
  }

  return max;
}

console.log({ part1: getTotalJoltagePart1() });

// ---- PART: 2 ----
export function getTotalJoltagePart2(filePath = "../input.txt"): number {
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const banks = fileContent.split("\n").filter((bk) => bk.trim());

  let total = 0;

  for (const bank of banks) {
    total += largestJoltageInBankPart2(bank);
  }

  return total;
}

function largestJoltageInBankPart2(bank: string, maxBatteries = 12): number {
  const stack = [];
  let toRemove = bank.length - maxBatteries;

  for (let i = 0; i < bank.length; i++) {
    const ch = bank[i];

    while (stack.length > 0 && toRemove > 0 && stack.at(-1)! < ch) {
      stack.pop();
      toRemove--;
    }
    stack.push(ch);
  }

  return Number(stack.slice(0, maxBatteries).join(""));
}

console.log({ part2: getTotalJoltagePart2() });
