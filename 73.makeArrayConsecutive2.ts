// Retiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having a non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous by exactly 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues: number[]): number {
  let count = 0;
  const sortedStatues = statues.sort((a, b) => a - b);
  const min = sortedStatues[0];
  const max = sortedStatues[sortedStatues.length - 1];

  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
