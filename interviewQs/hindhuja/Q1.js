const arr = [1, 3, 4, 0, 2, 0, 7, 0, 9, 0, 45, 5];

const re = arr.sort((a, b) => b - a);

console.log(re === arr);
