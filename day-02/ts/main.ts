"use strict";

import fs from "node:fs";
import { part1 } from "./part1.ts";
import { part2 } from "./part2.ts";

function readInput(filePath: string) {
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const ids = fileContent.split(",");
  return ids;
}

export function main(filePath = "../input.txt") {
  const input = readInput(filePath);

  const part1Res = part1(input);
  const part2Res = part2(input);

  console.log("Part 1: ", part1Res);
  console.log("Part 2: ", part2Res);

  return { part1Res, part2Res };
}

main();
