// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

function sortByHeight(arr: number[]): number[] {
  let removedTrees = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      removedTrees.push(arr[i]);
    }
  }
  removedTrees.sort();
  console.log(removedTrees);

  let removedTreesIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = removedTrees[removedTreesIndex];
      removedTreesIndex++;
    }
  }
  return arr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
