"use strict";
import fs from "node:fs";
import { checkItem } from "./part-1.ts";

export function totalRollsRemoved(filePath = "../input.txt") {
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");

  const grid: string[][] = [];
  lines.forEach((line) => grid.push(line.split("")));

  let hasRollsToRemove = true;
  let removedRollsPositions: string[] = [];
  let totalRolls = 0;

  while (hasRollsToRemove) {
    let rolls = 0;

    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r]!.length; c++) {
        if (grid[r]![c] !== "@") continue;

        let adjacentItems = 0;
        if (checkItem(grid, r - 1, c - 1)) adjacentItems += 1;
        if (checkItem(grid, r - 1, c)) adjacentItems += 1;
        if (checkItem(grid, r - 1, c + 1)) adjacentItems += 1;
        if (checkItem(grid, r, c - 1)) adjacentItems += 1;
        if (checkItem(grid, r, c + 1)) adjacentItems += 1;
        if (checkItem(grid, r + 1, c - 1)) adjacentItems += 1;
        if (checkItem(grid, r + 1, c)) adjacentItems += 1;
        if (checkItem(grid, r + 1, c + 1)) adjacentItems += 1;

        if (adjacentItems < 4) {
          const pos = r + "," + c;
          removedRollsPositions.push(pos);
          rolls += 1;
        }
      }
    }

    if (rolls === 0) hasRollsToRemove = false;
    totalRolls += rolls;
    removedRollsPositions.forEach((position) => {
      const [r, c] = position.split(",").map(Number);
      grid[r][c] = ".";
    });
    removedRollsPositions = [];
  }

  return totalRolls;
}

totalRollsRemoved();
