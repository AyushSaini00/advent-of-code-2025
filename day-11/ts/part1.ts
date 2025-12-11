export function part1(input: string[]) {
  const deviceMap = new Map();

  for (let lineItem of input) {
    let [key, values] = lineItem.split(": ");
    deviceMap.set(key, new Set(values!.split(" ")));
  }

  let paths = 0;
  const src = "you";
  const dst = "out";
  const stack = [src];

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr === dst) {
      paths += 1;
      continue;
    }

    for (let neighbor of deviceMap.get(curr)) {
      stack.push(neighbor);
    }
  }

  return paths;
}
