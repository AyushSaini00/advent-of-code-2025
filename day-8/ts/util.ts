export function getDistance(a: number[], b: number[]) {
  const [x1, y1, z1] = a;
  const [x2, y2, z2] = b;

  return Math.hypot(x2! - x1!, y2! - y1!, z2! - z1!);
}

export function getSortedDistanceMap(rows: number[][], maxItems?: number) {
  const distanceMap = new Map<string, number>();

  for (let i = 0; i < rows.length; i++) {
    for (let j = i + 1; j < rows.length; j++) {
      const key = `${i},${j}`;
      distanceMap.set(key, getDistance(rows[i]!, rows[j]!));
    }
  }

  return new Map<string, number>(
    [...distanceMap.entries()].sort((a, b) => a[1] - b[1]).slice(0, maxItems)
  );
}
