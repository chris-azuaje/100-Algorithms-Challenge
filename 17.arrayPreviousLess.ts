// Given an array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

function arrayPreviousLeft(newArray: number[]): number[] {
  let arr = [-1];
  for (let i = 1; i < newArray.length; i++) {
    newArray[i - 1] > newArray[i] ? arr.push(-1) : arr.push(newArray[i - 1]);
  }
  return arr;
}

console.log(arrayPreviousLeft([3, 5, 2, 4, 5]));
