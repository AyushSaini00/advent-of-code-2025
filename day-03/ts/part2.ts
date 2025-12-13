export function part2(banks: string[]) {
  let total = 0;

  for (const bank of banks) {
    total += largestJoltageInBank(bank);
  }

  return total;
}

function largestJoltageInBank(bank: string, maxBatteries = 12): number {
  const stack = [];
  let toRemove = bank.length - maxBatteries;

  for (let i = 0; i < bank.length; i++) {
    const ch = bank[i];

    while (stack.length > 0 && toRemove > 0 && stack.at(-1)! < ch) {
      stack.pop();
      toRemove--;
    }
    stack.push(ch);
  }

  return Number(stack.slice(0, maxBatteries).join(""));
}
