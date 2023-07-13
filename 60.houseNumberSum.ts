// Take an array of numbers. Begin to add them and once there is a zero, the count stops. Return the count.

function houseNumberSum(arr: number[]): number {
  //   let newArr = arr.toString().split("0");
  //   console.log(newArr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return sum;
    }
    sum += arr[i];
  }
}

console.log(houseNumberSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
