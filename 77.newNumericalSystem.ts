// Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

function newNumeralSystem(number: string): string[] {
  const numerals: string[] = [];
  let startCharCount = 65;
  let endCharCount = number.charCodeAt(0);

  while (startCharCount <= endCharCount) {
    const numeral = `${String.fromCharCode(
      startCharCount
    )} + ${String.fromCharCode(endCharCount)}`;
    numerals.push(numeral);
    startCharCount++;
    endCharCount--;
  }
  return numerals;
}

console.log(newNumeralSystem("G"));
