import { part1 } from "./part1";
import { part2 } from "./part2";

async function readInput() {
  const file = Bun.file("../input.txt");
  const fileContent = await file.text();
  return fileContent.split("\n");
}

async function main() {
  const input = await readInput();

  // console.log("Part 1: ", part1(input));
  console.log("Part 2: ", part2(input));
}

main();