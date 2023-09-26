// Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

function sumAllPrimeNums(num: number): number {
  let primesTotal = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        primesTotal += i;
      }

      if (i % j === 0) {
        break;
      }
    }
  }
  return primesTotal;
}

console.log(sumAllPrimeNums(10));
console.log(sumAllPrimeNums(977));
