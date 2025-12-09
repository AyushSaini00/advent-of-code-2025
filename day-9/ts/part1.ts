import { area } from "./util";

type Position = [number, number];

export function part1(positions: number[][]) {
  let maxArea = 0;

  for (let i = 0; i < positions.length; i++) {
    const pos1 = positions[i] as Position;

    for (let j = i + 1; j < positions.length; j++) {
      const pos2 = positions[j] as Position;

      // skipping pos which aren't opposite corners
      if (pos1[0] === pos2[0] || pos1[1] === pos2[1]) continue;

      maxArea = Math.max(maxArea, area(pos1, pos2));
    }
  }

  return maxArea;
}
