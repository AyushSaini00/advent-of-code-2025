export function part2(input: string[]) {
  const deviceMap = new Map<string, Set<string>>();

  for (let lineItem of input) {
    let [key, values] = lineItem.split(": ");
    deviceMap.set(key!, new Set(values!.split(" ")));
  }

  const src = "svr";
  const dst = "out";
  const REQUIRED = ["fft", "dac"];

  return countPaths(deviceMap, src, dst, REQUIRED);
}

function countPaths(
  graph: Map<string, Set<string>>,
  node: string,
  dst: string,
  needed: string[],
  memo = new Map()
) {
  const key = node + "|" + needed.join(",");
  if (memo.has(key)) return memo.get(key);

  const newNeeded = needed.filter((n) => n !== node);

  if (node === dst) {
    const valid = newNeeded.length === 0 ? 1: 0;
    memo.set(key, valid);
    return valid;
  }

  let total = 0;
  for (let next of graph.get(node) || []) {
    total += countPaths(graph, next, dst, newNeeded, memo);
  }

  memo.set(key, total);
  return total;
}
