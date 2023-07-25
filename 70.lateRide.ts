// A bike leaves at 00:00. Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function lateRide(n: number): number {
  let sum = 0;
  let hour = 0;

  while (n >= 60) {
    n = n - 60;
    hour++;
  }

  console.log(hour);
  let hourArr = String(hour)
    .split("")
    .map((num) => {
      return Number(num);
    });
  console.log(hourArr);

  let minute = n;
  let minuteArr = String(minute)
    .split("")
    .map((num) => {
      return Number(num);
    });
  console.log(minuteArr);

  let newArr = hourArr.concat(minuteArr);
  console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
