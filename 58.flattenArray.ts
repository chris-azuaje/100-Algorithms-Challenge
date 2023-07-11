// Flatten a nested array. You must account for varying levels of nesting.

function flattenArray(arr: any[]): any[] {
  const oneArray = [];

  flatten(arr);

  function flatten(arr: any[]) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        oneArray.push(element);
      }
    });
  }

  return oneArray;
}

console.log(flattenArray([0, 1, 2, [3, 4]]));
console.log(flattenArray([0, 1, 2, [[[3, 4]]]]));
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));
