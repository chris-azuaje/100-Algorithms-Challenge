// Add values of an array of 2
// function add(param1: number, param2: number): number {
//   return param1 + param2;
// }

// console.log(add(1, 2));
// console.log(add(3, 2));

// --------------------------------------------

// Add values of an array of any length
// function add2(...param1: number[]): number {
//   let total = 0;

//   param1.forEach((num) => {
//     total += num;
//   });
//   return total;
// }

// console.log(add2(1, 2, 3, 4, 5));
// console.log(add2(2, 3));

function add(...param: number[]): number {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 80));
