// There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

function houseOfCats(legs: number): number[] {
  const peopleCount: number[] = [];

  if (legs === 2) {
    return [1];
  }

  while (legs >= 0) {
    peopleCount.unshift(legs / 2);
    legs -= 4;
  }

  return peopleCount;
}

console.log(houseOfCats(2));
console.log(houseOfCats(6));
