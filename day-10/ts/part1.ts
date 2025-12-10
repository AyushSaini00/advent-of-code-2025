import { buildMachine, compareStates } from "./util";

export function part1(input: string[]) {
  let allButtonPresses = 0;

  for (const lineItem of input) {
    const { lightDiagram, buttonSchematics } = buildMachine(lineItem);
    const initialLightDiagram = Array.from(lightDiagram, () => ".");

    allButtonPresses += minPresses(
      initialLightDiagram,
      lightDiagram,
      buttonSchematics
    );
  }

  return allButtonPresses;
}

function minPresses(
  state: string[],
  desiredState: string[],
  buttonCombos: Set<number>[],
  memo = new Map(),
  visited = new Set()
) {
  const key = state.join("");
  if (memo.has(key)) return memo.get(key);
  if (visited.has(key)) return Infinity;

  if (compareStates(state, desiredState)) return 0;
  visited.add(key);
  let minVal = Infinity;
  
  for (let buttonCombo of buttonCombos) {
    const nextState = toggleLights(state, buttonCombo);
    const numPresses =
      1 + minPresses(nextState, desiredState, buttonCombos, memo, visited);
    minVal = Math.min(minVal, numPresses);
  }

  visited.delete(key);
  memo.set(key, minVal);
  return minVal;
}

function toggleLights(lights: string[], buttons: Set<number>) {
  const next = [...lights];
  for (const btn of buttons) {
    next[btn] = next[btn] === "." ? "#" : ".";
  }
  return next;
}


