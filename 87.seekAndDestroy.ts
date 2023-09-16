// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function seekAndDestroy(initialArr: number[], removeArr: number[]): number[] {
  let resultArr = [];
  for (let i = 0; i < initialArr.length; i++) {
    if (removeArr.indexOf(initialArr[i]) === -1) {
      resultArr.push(initialArr[i]);
    }
  }
  return resultArr;
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
