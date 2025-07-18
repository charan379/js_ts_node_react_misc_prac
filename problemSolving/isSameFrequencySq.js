console.log(isSameFrequencySqr([1, 2, 3], [1, 4, 9]));

function isSameFrequencySqr(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  let map = new Map();

  let isCorrect = false;

  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr2[i]);
  }

  for (let [key, value] of map) {
    if (key ** 2 !== value) {
      isCorrect = false;
    } else {
      isCorrect = true;
    }
  }

  return isCorrect;
}
