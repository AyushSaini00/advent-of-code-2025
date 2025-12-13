export function part1(input: string) {
  const rows = input.split("\n");

  const sr = 0;
  const sc = rows[sr]!.indexOf("S");

  let beamCols = new Set<number>([sc]);
  let totalSplits = 0;

  const seenPositions = new Set<string>(); // "r,c"

  for (let r = 1; r < rows.length; r++) {
    if (!rows[r]!.includes("^")) continue;

    let newBeamColumns = new Set<number>();
    for (const c of beamCols) {
      if (rows[r]![c] == "^") {
        const key = r + "," + c;
        if (!seenPositions.has(key)) {
          seenPositions.add(key);
          totalSplits += 1;
        }

        if (c - 1 >= 0) newBeamColumns.add(c - 1);
        if (c + 1 < rows[0]!.length) newBeamColumns.add(c + 1);
      } else {
        newBeamColumns.add(c);
      }
    }
    beamCols = newBeamColumns;
  }

  return totalSplits;
}
