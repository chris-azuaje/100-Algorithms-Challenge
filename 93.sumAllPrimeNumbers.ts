// Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

function sumAllPrimeNumbers(num: number): number {
  let primeNums = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primeNums.push(i);
      console.log(primeNums);
    }
  }
}

// NOT FINISHED

console.log(sumAllPrimeNumbers(10));
console.log(sumAllPrimeNumbers(977));
