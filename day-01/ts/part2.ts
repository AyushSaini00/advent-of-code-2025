export function part2(
  rotations: string[],
  startPositon = 50,
  size = 100 // from 0 -> 99 items on dial
) {
  let count = 0;
  let pos = startPositon; // curr pointer position on dialer

  for (const currRotation of rotations) {
    const direction = currRotation[0];
    let steps = Number(currRotation.slice(1));

    for (let i = 0; i < steps; i++) {
      if (direction === "R") {
        pos = (pos + 1) % size;
      } else if (direction === "L") {
        pos = (((pos - 1) % size) + size) % size; // to handle negative modulos
      }

      if (pos === 0) count += 1;
    }
  }

  return count;
}
