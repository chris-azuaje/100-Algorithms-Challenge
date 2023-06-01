// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function isCaseInsensitivePalindrome(input: string): boolean {
  let newStr = input.toLowerCase().split("").reverse().join("");
  return newStr === input.toLowerCase();
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
