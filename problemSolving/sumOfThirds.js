console.log(sumOfThirds([1, 3, 2, 4, 5, 7, 9, 3, 3]));

function sumOfThirds(arr) {
  let sum = 0;
  for (let i = 2; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
}
