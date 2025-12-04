"use strict";
import fs from "node:fs";

export function countRolls(filePath = "../input.txt") {
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");

  const grid: string[][] = [];
  lines.forEach((line) => grid.push(line.split("")));
  let count = 0;

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

      if (adjacentItems < 4) count += 1;
    }
  }

  return count;
}

export function checkItem(grid: string[][], r: number, c: number) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0]!.length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r]![c] !== "@") return false;
  if (grid[r]![c] === "@") return true;
}

countRolls();
