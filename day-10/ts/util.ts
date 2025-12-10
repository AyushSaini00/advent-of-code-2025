export function buildMachine(lineItem: string) {
  const lightDiagram: string[] = [];
  const buttonSchematics: Set<number>[] = [];
  const joltageReq = [];

  for (const item of lineItem.split(" ")) {
    if (item.startsWith("[")) {
      lightDiagram.push(
        ...item.split("").filter((el) => el !== "]" && el !== "[")
      );
    }

    if (item.startsWith("(")) {
      buttonSchematics.push(
        new Set(
          item
            .split("")
            .filter((el) => el !== "(" && el !== ")" && el !== ",")
            .map(Number)
        )
      );
    }

    if (item.startsWith("{")) {
      joltageReq.push(...item.slice(1, -1).split(",").map(Number));
    }
  }

  return { lightDiagram, buttonSchematics, joltageReq };
}

export function compareStates<T>(state1: T[], state2: T[]) {
  if (state1.length !== state2.length) return false;

  for (let i = 0; i < state1.length; i++) {
    if (state1[i] !== state2[i]) return false;
  }
  return true;
}
