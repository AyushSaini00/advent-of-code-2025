import { getSortedDistanceMap } from "./util";

export function part2(input: string) {
  const rows = input.split("\n").map((row) => row.split(",").map(Number));
  const sortedDistanceMap = getSortedDistanceMap(rows);
  const edges = [...sortedDistanceMap.keys()];

  let idx = 0;
  const visited = new Set();
  while (visited.size !== rows.length) {
    const [a, b] = edges[idx]!.split(",").map(Number);
    visited.add(a);
    visited.add(b);
    idx++;
  }

  const lastConnectingEdge = edges[idx - 1]!.split(",").map(Number);
  const [a, b] = lastConnectingEdge;

  if (typeof a === "undefined" || typeof b === "undefined")
    throw new Error("This can't be!");

  return rows[a]![0]! * rows[b]![0]!;
}
