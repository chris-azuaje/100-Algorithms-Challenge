// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 2; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
