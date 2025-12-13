import { area } from "./util";

type Position = [number, number];
type PolygonEdge =
  | { kind: "vertical"; x: number; y1: number; y2: number }
  | { kind: "horizontal"; y: number; x1: number; x2: number };

export function part2(positions: number[][]) {
  const polygon = buildPolygon(positions);

  let maxArea = 0;

  for (let i = 0; i < positions.length; i++) {
    const pos1 = positions[i] as Position;

    for (let j = i + 1; j < positions.length; j++) {
      const pos2 = positions[j] as Position;

      if (pos1[0] === pos2[0] || pos1[1] === pos2[1]) continue;
      if (!isValidRect(pos1, pos2, polygon)) continue;

      maxArea = Math.max(maxArea, area(pos1, pos2));
    }
  }

  return maxArea;
}

function isValidRect(pos1: Position, pos2: Position, polygon: PolygonEdge[]) {
  const [x1r, y1r] = pos1;
  const [x2r, y2r] = pos2;

  if (x1r === x2r || y1r === y2r) return false;

  const x1 = Math.min(x1r, x2r);
  const x2 = Math.max(x1r, x2r);
  const y1 = Math.min(y1r, y2r);
  const y2 = Math.max(y1r, y2r);

  // center must be inside the polygon
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  if (!pointInsidePolygon(cx, cy, polygon)) return false;

  // polygon border must not pass through the rectange interior.
  // touching the boundaries is allowed though
  for (const edge of polygon) {
    if (edge.kind === "vertical") {
      // check if this vertical edge is strictly inside (x1, x2)
      if (edge.x > x1 && edge.x < x2) {
        // check for overlap in y axis
        const overlapStart = Math.max(edge.y1, y1);
        const overlapEnd = Math.min(edge.y2, y2);
        if (overlapEnd > overlapStart) return false;
      }
    } else {
      // check if this horizontal edge is strictly inside (y1, y2)
      if (edge.y > y1 && edge.y < y2) {
        // check for overlap in x axis
        const overlapStart = Math.max(edge.x1, x1);
        const overlapEnd = Math.min(edge.x2, x2);
        if (overlapEnd > overlapStart) return false;
      }
    }
  }

  return true;
}

function pointInsidePolygon(x: number, y: number, polygon: PolygonEdge[]) {
  let crossings = 0;

  for (const edge of polygon) {
    if (edge.kind !== "vertical") continue;

    if (x >= edge.x) continue;
    if (y <= edge.y1 || y > edge.y2) continue;

    crossings++;
  }

  return crossings % 2 === 1;
}

function buildPolygon(positions: number[][]): PolygonEdge[] {
  const polygonEdges: PolygonEdge[] = [];

  for (let i = 0; i < positions.length; i++) {
    const [x1, y1] = positions[i] as Position;
    const [x2, y2] = positions[(i + 1) % positions.length] as Position;

    if (x1 === x2) {
      const yLow = Math.min(y1, y2);
      const yHigh = Math.max(y1, y2);

      polygonEdges.push({ kind: "vertical", x: x1, y1: yLow, y2: yHigh });
    } else {
      const xLow = Math.min(x1, x2);
      const xHigh = Math.max(x1, x2);
      
      polygonEdges.push({ kind: "horizontal", y: y1, x1: xLow, x2: xHigh });
    }
  }

  return polygonEdges;
}
