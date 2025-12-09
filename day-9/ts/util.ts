export function area(pos1: [number, number], pos2: [number, number]) {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;

  const width = Math.abs(x2 - x1);
  const heigh = Math.abs(y2 - y1);

  return (width + 1) * (heigh + 1);
}
