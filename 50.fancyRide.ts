// You have $20 to spend on an Uber option. You know the length I of your ride in miles and how much one mile costs for each car. Find the best car you can afford.

function fancyRide(n: number, fares: number[]): string {
  const rides: string[] = [
    "UberX",
    "UberXL",
    "UberPlus",
    "UberBlack",
    "UberSUV",
  ];

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * n <= 20) {
      return rides[i];
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
