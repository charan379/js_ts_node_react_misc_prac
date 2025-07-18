const nestedArray = [
  [1, 2, [3]],
  [4, 5],
  [6, 7, [8, [9]]],
];

console.log(flattenArray(nestedArray));

function flattenArray(arr) {
  // return arr.flat(Infinity);

  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(flattenArray(cur));
    } else {
      return acc.concat(cur);
    }
  }, []);
}
