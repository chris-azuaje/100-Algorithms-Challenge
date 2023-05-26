// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => a - b);
  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every((element) => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
