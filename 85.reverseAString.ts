// Reverse the provided string

function reverseAString(str: string): string {
  let reversedStr = str.split('').reverse().join('');
  return reversedStr;
}

console.log(reverseAString('hello'));
console.log(reverseAString('yellow'));
