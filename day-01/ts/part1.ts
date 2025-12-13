export function part1(rotations: string[], startPositon = 50) {
  let count = 0;
  const [minRange, maxRange] = [0, 99]; // min and max values or dial
  const rangeSize = maxRange - minRange + 1;

  let curr = startPositon; // dial begins at 50

  for (const currRotation of rotations) {
    const direction = currRotation[0];
    const num = Number(currRotation.slice(1)) % rangeSize;

    if (direction === "L") {
      curr = curr - num < minRange ? curr - num + rangeSize : curr - num;
    } else if (direction === "R") {
      curr = curr + num > maxRange ? curr + num - rangeSize : curr + num;
    }

    if (curr === 0) count += 1;
  }

  return count;
}
