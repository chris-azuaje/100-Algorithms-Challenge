// Determine whether the given string can be obtained by one concatenation of some string to itself.

function isTandemRepeat(string: string): boolean {
  if (string.length % 2 === 0) {
    let firstHalf = string.slice(0, string.length / 2);
    let secondHalf = string.slice(string.length / 2);

    return firstHalf === secondHalf;
  }
  return false;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
