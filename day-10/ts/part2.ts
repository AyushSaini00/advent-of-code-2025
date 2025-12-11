import { buildMachine, compareStates } from "./util";

export function part2(input: string[]) {
  let allBtnPresses = 0;

  for (const lineItem of input) {
    const { buttonSchematics, joltageReq } = buildMachine(lineItem);
    const initialJoltageState = Array.from(joltageReq, () => 0);

    // console.log(initialJoltageState, joltageReq, buttonSchematics);
    // console.log(minPresses(initialJoltageState, joltageReq, buttonSchematics));
    // break;
    const val = minPresses(
        initialJoltageState,
        joltageReq,
        buttonSchematics
      );
      console.log(lineItem, val)
    allBtnPresses += val
  }

  return allBtnPresses;
}

function minPresses(initialState, desiredState, buttonCombos) {
    const startKey = initialState.join("-");
    if (compareStates(initialState, desiredState)) return 0;
  
    const visited = new Set([startKey]);
    const queue = [{ state: initialState, presses: 0 }];
  
    while (queue.length) {
      const { state, presses } = queue.shift();
  
      for (const buttonCombo of buttonCombos) {
        // compute vector increments
        const inc = new Array(state.length).fill(0);
        buttonCombo.forEach(idx => inc[idx] = 1);
  
        // compute maximum k to press without overshoot
        let kMax = Infinity;
        for (let i = 0; i < state.length; i++) {
          if (inc[i] === 0) continue;
          kMax = Math.min(kMax, desiredState[i] - state[i]);
        }
        if (kMax <= 0) continue; // pressing this button even once overshoots
  
        // Try pressing the button 1 time, 2 times, ... kMax times
        let nextState = [...state];
        for (let k = 1; k <= kMax; k++) {
          // apply increment once per loop
          buttonCombo.forEach(idx => nextState[idx]++);
  
          // check match
          if (compareStates(nextState, desiredState)) {
            return presses + k; // THIS IS THE KEY: k counts multiple presses
          }
  
          const key = nextState.join("-");
          if (!visited.has(key)) {
            visited.add(key);
            queue.push({ state: [...nextState], presses: presses + k });
          }
        }
      }
    }
  
    return Infinity;
  }

// function minPresses(
//   initialState: number[],
//   desiredState: number[],
//   buttonCombos: Set<number>[]
// ) {
//   if (compareStates(initialState, desiredState)) return 0;
//   const startKey = initialState.join("-");

//   const visited = new Set([startKey]);
//   const queue = [{ state: initialState, presses: 0 }];

//   while (queue.length) {
//     const { state, presses } = queue.shift()!;

//     for (const buttonCombo of buttonCombos) {
//       const inc = new Array(state.length).fill(0);
//       buttonCombo.forEach((idx) => (inc[idx] = 1));

//       let kMax = Infinity;
//       for (let i = 0; i < state.length; i++) {
//         if (inc[i] === 0) continue;
//         kMax = Math.min(kMax, desiredState[i]! - state[i]!);
//       }
//       if (kMax <= 0) continue;

//       let nextState = [...state];
//       for (let k = 1; k <= kMax; k++) {
//         buttonCombo.forEach((idx) => nextState[idx] += 1);

//         if (compareStates(nextState, desiredState)) {
//           return presses + k;
//         }
//         const key = nextState.join("-");
//         if (!visited.has(key)) {
//           visited.add(key);
//           queue.push({ state: nextState, presses: presses + k });
//         }
//       }

//       //   const nextState = configureJoltage(state, buttonCombo);

//       //   if (nextState.some((v, i) => v > desiredState[i]!)) continue;
//     }
//   }
// }

function configureJoltage(joltages: number[], buttons: Set<number>) {
  const next = [...joltages];
  for (const btn of buttons) {
    if (typeof next[btn] === "undefined")
      throw new Error("something wrong with the state");

    next[btn] += 1;
  }
  return next;
}
