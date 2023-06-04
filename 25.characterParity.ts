// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

function characterParity(value: any): string {
  if (typeof value === "number") {
    if (value % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "not a number";
  }
}

console.log(characterParity(5));
console.log(characterParity(8));
console.log(characterParity("r"));
