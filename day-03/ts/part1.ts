export function part1(banks: string[]) {
  let total = 0;
  for (const bank of banks) {
    total += largestJoltageInBank(bank);
  }
  return total;
}

function largestJoltageInBank(bank: string): number {
  const len = bank.length;

  if (len === 2) return Number(bank);
  let max = 0;

  let i = 0;
  let j = 1;

  while (i < j && i < len && j < len) {
    while (j < len) {
      max = Math.max(max, Number(bank[i] + bank[j]));
      j++;
    }

    i += 1;
    j = i + 1;
  }

  return max;
}
