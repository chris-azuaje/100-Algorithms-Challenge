// Check if a string (first argument, str) ends with the given target string

function confirmEnding(argument: string, str: string) {
  const start = argument.length - str.length;

  return argument.substr(start, argument.length) === str;
}

console.log(confirmEnding("Abstraction", "action"));
