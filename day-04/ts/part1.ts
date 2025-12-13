import { checkItem } from "./util.js";

export function part1(lines: string[]) {
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
