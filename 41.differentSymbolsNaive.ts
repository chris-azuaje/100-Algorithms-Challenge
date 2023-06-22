// Given a string, find the number of different characters in it.

function differentSymbolsNaive(string: string): number {
  let newStr = "";
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    if (newStr.includes(string[i])) {
      continue;
    } else {
      newStr = newStr.concat(string[i]);
      num++;
    }
  }
  return num;
}

console.log(differentSymbolsNaive("heyyyy"));
