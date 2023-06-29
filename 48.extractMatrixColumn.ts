// Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix.

function extractMatrixColumn(array: number[][], n: number): number[] {
  let newArr = [];
  //   First Option
  //   for (let i = 0; i < array.length; i++) {
  //     newArr.push(array[i][n]);
  //   }

  //   Best Option
  array.forEach((row) => newArr.push(row[n]));
  return newArr;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
