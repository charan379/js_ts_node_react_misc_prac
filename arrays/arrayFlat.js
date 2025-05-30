
const arr = [[0, 1], [2, 3], [4, 5, [6, 7]]];

const arr2 = arr.flat(2); // or we can pass Infinity to the flat(Infinity) to recurive deep

console.log(arr2);