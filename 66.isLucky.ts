// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

function isLucky(n: number): boolean {
  const string = n.toString();

  let firstHalfString = string.slice(0, string.length / 2);
  let secondHalfString = string.slice(string.length / 2);

  let firstHalfArr = firstHalfString.split("").map(Number);
  let secondHalfArr = secondHalfString.split("").map(Number);

  let firstHalfTotal = 0;
  let secondHalfTotal = 0;

  for (let i = 0; i < firstHalfArr.length; i++) {
    firstHalfTotal += firstHalfArr[i];
    secondHalfTotal += secondHalfArr[i];
  }

  return firstHalfTotal === secondHalfTotal;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
