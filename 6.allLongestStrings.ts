// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const newArray = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      newArray.push(word);
    }
  });
  return newArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
