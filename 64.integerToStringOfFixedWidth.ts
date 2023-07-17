//  Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

function integerToStringOfFixedWidth(number: number, width: number): string {
  let result = number.toString();
  if (width <= result.length) {
    result = result.slice(-width);
  } else {
    const padDiff = width - result.length;
    let padStart = "";
    for (let i = 0; i < padDiff; i++) {
      padStart = padStart.concat("0");
    }
    result = padStart.concat(result);
  }
  return result;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 8));
