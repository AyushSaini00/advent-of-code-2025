export function part2(input: string) {
  const rows = input.split("\n");
  const lenRow = rows.length;
  const lenCol = rows[0]!.length;

  const sr = 0;
  const sc = rows[sr]!.indexOf("S");

  const count = Array.from({ length: lenRow }, (_, k) =>
    Array.from({ length: lenCol }, () => 0)
  );
  count[sr]![sc] = 1;

  for (let r = sr; r < lenRow - 1; r++) {
    for (let c = 0; c < lenCol; c++) {
      const beamsHere = count[r]![c]!;
      if (beamsHere === 0) continue;

      const below = rows[r + 1]![c];

      if (below === ".") {
        count[r + 1]![c]! += beamsHere;
      } else if (below === "^") {
        //split left and right
        if (c - 1 >= 0) {
          count[r + 1]![c - 1]! += beamsHere;
        }

        if (c + 1 < lenCol) {
          count[r + 1]![c + 1]! += beamsHere;
        }
      }
    }
  }

  let total = 0;
  for (let c = 0; c < lenCol; c++) {
    total += count[lenRow - 1]![c]!;
  }
  return total;
}
