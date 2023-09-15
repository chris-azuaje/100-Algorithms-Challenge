// Given the total number of rows and columns in the theater, (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  let totalSeatsBehind = (nCols - (col - 1)) * (nRows - row);
  return totalSeatsBehind;
}

console.log(seatsInTheater(16, 11, 5, 3));
