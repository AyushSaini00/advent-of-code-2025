export function part2(ids: string[]) {
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
  //invalidId => made ONLY of sequence of digits repeated at least twice
  // eg: 111 is invalid as 1 is repeated 3 times
  // note that 110 is valid.
  let input = String(id);
  const len = input.length;

  if (len <= 1) return false; // let's ignore ids with len <= 1.

  // is input is made by repeated sequences, then input will appear inside (input + input)
  // if input has no repeatations, the only occurance of input in doubled will be at index 0 and index n, so it won't appear in middle slice.

  const doubled = input + input;
  const middle = doubled.slice(1, -1); // removing idx 0 and idx n chars

  return middle.indexOf(input) !== -1;
}
