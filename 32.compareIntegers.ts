// Compare two integers given as strings

// Example: For a = '12' and b = '13', the output should be compareIntegers(a, b) = 'less'

function compareIntegers(a: string, b: string): string {
  const firstVal = parseInt(a);
  const secondVal = parseInt(b);

  if (firstVal > secondVal) {
    return "greater";
  } else if (firstVal < secondVal) {
    return "less";
  } else {
    return "equal";
  }
}

console.log(compareIntegers("15", "15"));
