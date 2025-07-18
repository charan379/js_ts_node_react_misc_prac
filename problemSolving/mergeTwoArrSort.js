console.log(mergenSort([0, 3, 4, 5, 6], [0, 3, 4, 5, 6]));

function mergenSort(arr1, arr2) {
  let mergedSort = [...arr1, ...arr2];

  for (let i = 0; i < mergedSort.length; i++) {
    for (let j = i + 1; j < mergedSort.length; j++) {
      if (mergedSort[i] > mergedSort[j]) {
        [mergedSort[i], mergedSort[j]] = [mergedSort[j], mergedSort[i]];
      }
    }
  }

  return mergedSort;
}
