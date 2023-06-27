// Check if all digits of the given integer are even.

function evenDigitsOnly(n: number): any {
  let result = n.toString().split("");
  return result.every((num) => parseInt(num) % 2 === 0);
}

console.log(evenDigitsOnly(154862));
console.log(evenDigitsOnly(884862));
