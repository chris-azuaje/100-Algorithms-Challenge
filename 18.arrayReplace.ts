// Given an array of integers, replace all the occurences of elemToReplace with substitutionElem.

function arrayReplace(
  array: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    array[i] === elemToReplace
      ? arr.push(substitutionElem)
      : arr.push(array[i]);
  }

  return arr;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
