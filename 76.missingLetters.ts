// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function missingLetters(str: string): any {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const chars = str.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }

  return undefined;
}

console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
