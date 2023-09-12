// You're given a list of ratings for some Pros. Find out which Pros should be manually reviewed.

function ratingThreshold(threshold: number, arr: number[][]): number {
  let averages: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let totalRating = 0;

    arr[i].forEach((rating: number) => {
      totalRating += rating;
    });
    if (totalRating / arr[i].length < threshold) {
      averages.push(i);
    }
  }
  return averages;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
