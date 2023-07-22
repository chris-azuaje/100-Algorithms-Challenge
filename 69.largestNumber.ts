// Take in a single digit and print out the largest number that can come out. The single digit represents the number of digits in the largest number.

function largestNumber(n: number): number {
  let largestNum = 0;
  let largestNumString = largestNum.toString();

  for (let i = 0; i < n; i++) {
    largestNumString = largestNumString.concat("9");
    largestNum = parseInt(largestNumString);
  }

  return largestNum;
}

console.log(largestNumber(2));
console.log(largestNumber(3));
console.log(largestNumber(4));
