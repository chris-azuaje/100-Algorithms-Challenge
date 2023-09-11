// Correct a given proper noun so that it fits this statement

function properNounCorrection(str: string): string {
  let newStr = str.toLowerCase().split('');
  newStr[0] = newStr[0].toUpperCase();
  newStr = newStr.join('').toString();

  return newStr;
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
