// Return the factorial of the provided integer.

function factorializeANumber(n: number): number {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

console.log(factorializeANumber(5));
