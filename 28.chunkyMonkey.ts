// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkyMonkey(array: any[], value: number): any[][] {
  let newArr = [];
  let count = 0;

  while (count < array.length) {
    newArr.push(array.slice(count, (count += value)));
  }

  return newArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
