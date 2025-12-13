export function part1(ids: string[]) {
  let sum = 0;

  for (const id of ids) {
    let [firstId, lastId] = id.split("-");
    firstId = Number(firstId);
    lastId = Number(lastId);

    for (let i = firstId; i <= lastId; i++) {
      if (isInvalidId(i)) sum += i;
    }
  }

  return sum;
}

function isInvalidId(id: number): boolean {
  // sequence of digits repeated twice are invalid ids

  let input = String(id);
  let len = input.length;

  if (len % 2 !== 0) return false;
  // len should also be even for ids to be invalid

  let p1 = 0;
  let p2 = len / 2;

  while (p2 < len) {
    if (input[p1] !== input[p2]) return false;

    p1++;
    p2++;
  }
  return true;
}
