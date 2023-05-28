// (blur a picture)... each pixel x in the resulting image has a value equal to the average calue of the input image pixels' value from the 3 x 3 square with the center at x. All pixels at the edges are cropped. As pixel's value is an integer, all fractions should be rounded down.

function boxBlur(image: number[][]): number[][] {
  const res = [];

  for (let y = 0; y < image.length - 2; y++) {
    const line = [];

    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;
      let count = 0;

      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
          count++;
        }
      }
      line.push(Math.floor(sum / count));
    }
    res.push(line);
  }

  return res;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
