import { part1 } from "./part1";
import { part2 } from "./part2";

async function readInput() {
  const file = Bun.file("../input.txt");
  return await file.text();
}

async function main() {
  const fileText = await readInput();

  console.log("Part 1: ", part1(fileText));
  console.log("Part 2: ", part2(fileText));
}

main();
