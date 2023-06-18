// You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing some characters from it. You're a pro at programming, so you decide to create a program to determine this.

function convertString(s: string, t: string): boolean {
  let word = "";
  let tIndex = 0;
  const sChars: string[] = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]) {
      word = word.concat(s[i]);
      tIndex++;

      if (word === t) {
        return true;
      }
    }
  }

  return false;
}

console.log(convertString("c68dr4od31dregsdgdfigasfhasts", "codefights"));
console.log(convertString("c68dr4od31dregsdgdfigasfhasts", "abcd"));
