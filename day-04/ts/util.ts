export function checkItem(grid: string[][], r: number, c: number) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0]!.length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r]![c] !== "@") return false;
  if (grid[r]![c] === "@") return true;
}
