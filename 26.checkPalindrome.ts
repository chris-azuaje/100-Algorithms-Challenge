// Given the string, check if it is a palindrome.

function checkPalindrome(input: string): boolean {
  let newStr = input.toLowerCase().split("").reverse();
  return newStr.join("") === input;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
