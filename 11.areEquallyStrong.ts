// Call two arms equally strong if the heaviest weights they are each able to lift are equal.

// Example: For yourLeft = 10, yourRight = 15, friendsLeft = 15, friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  let yourArms = yourLeft + yourRight;
  let friendsArms = friendsLeft + friendsRight;
  let sum = yourArms === friendsArms ? true : false;
  return sum;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
