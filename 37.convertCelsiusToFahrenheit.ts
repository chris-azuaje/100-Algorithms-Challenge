// Convert C to F given the formula: F = C*(9/5) + 32

function celsiusToFahrenheit(a: number): number {
  return a * (9 / 5) + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));
