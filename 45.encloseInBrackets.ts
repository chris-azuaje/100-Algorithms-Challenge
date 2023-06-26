// Given a string, enclose it in round brackets.

function encloseInBrackets(input: string): string {
  let newInput = "(".concat(input).concat(")");

  return newInput;
}

console.log(encloseInBrackets("abc"));
