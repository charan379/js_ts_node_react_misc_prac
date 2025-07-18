console.log(findConsecutive(5, [1, 5, 5, 4, 2, 5, 5, 5, 5, 5, 5, 5, 5]));

function findConsecutive(num, arr) {
  let maxConseCount = 0;
  let currentConseCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      currentConseCount++;
      maxConseCount = Math.max(maxConseCount, currentConseCount);
    } else {
      currentConseCount = 0;
    }
  }

  return maxConseCount;
}
