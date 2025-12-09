import { part1 } from "./part1";
import { part2 } from "./part2";

async function readInput() {
  const file = Bun.file("../input.txt");
  return await file.text();
}

async function main() {
  const input = await readInput();
  const positions = input.split("\n").map((row) => row.split(",").map(Number));

  console.log("Part 1: ", part1(positions));
  console.log("Part 2: ", part2(positions));
}

main();
