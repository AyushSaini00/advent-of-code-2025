import { getSortedDistanceMap } from "./util";

export function part1(input: string) {
  const MAX_CONNECTIONS = 1000;
  const rows = input.split("\n").map((row) => row.split(",").map(Number));
  const sortedDistanceMap = getSortedDistanceMap(rows, MAX_CONNECTIONS);
  const edges = [...sortedDistanceMap.keys()];

  const { graph, nodes } = buildGraph(edges);

  const circuitBoxesCount = [];

  // graph traversal
  const visited = new Set();
  for (const node of nodes) {
    if (!visited.has(node)) {
      let currCircuitJunctionBoxes = 0;

      const stack = [node];
      visited.add(node);

      while (stack.length > 0) {
        const curr = stack.pop();
        currCircuitJunctionBoxes += 1;

        for (const neighbor of graph.get(curr!)!) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            stack.push(neighbor);
          }
        }
      }

      circuitBoxesCount.push(currCircuitJunctionBoxes);
    }
  }

  return circuitBoxesCount
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, curr) => prev * curr, 1);
}

function buildGraph(edges: string[]) {
  const graph = new Map<number, Set<number>>();
  const allNodes = new Set<number>();

  for (let edge of edges) {
    const [a, b] = edge.split(",").map(Number);
    if (typeof a === "undefined" || typeof b === "undefined") continue;

    allNodes.add(a);
    allNodes.add(b);

    if (!graph.has(a)) graph.set(a, new Set());
    if (!graph.has(b)) graph.set(b, new Set());

    graph.get(a)!.add(b);
    graph.get(b)!.add(a);
  }

  return { graph, nodes: Array.from(allNodes).sort((a, b) => a - b) };
}
