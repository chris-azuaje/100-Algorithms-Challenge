// Fermact's factorization method is: If a * b = n (where a <= b), then there exist some c and d such that n = c^2 - d^2. Your goal is to return for given n such c and d as an array. Since we want c and d to be uniquely determined, in all test cases n is a semiprime number.

function fermactor(n: number): number[] {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      const total = Math.pow(i, 2) - Math.pow(j, 2);

      if (total === n) {
        return [i, j];
      }
    }
  }
}

console.log(fermactor(15));
