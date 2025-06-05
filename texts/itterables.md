(28 Javascript Array Methods: A Cheat Sheet for Developer
)[https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769]

Mutable Methods (Modify Original Array)
These methods change the array itself.
.push() → Adds elements to the end.
.pop() → Removes the last element.
.shift() → Removes the first element.
.unshift() → Adds elements to the start.
.splice() → Adds/removes elements at a specific index.
.sort() → Sorts the array in place. the default sort will be string based on Lexicographical unicodes
.reverse() → Reverses the array in place.
.copyWithin() -> Copies array elements within the array. Returns the modified array.

Immutable Methods (Return a New Array)
These methods do not modify the original array.
.map() → Applies a function to each element and returns a new array.
.filter() → Returns a new array with elements that match a condition.
.slice() → Extracts a portion of the array without modifying it.
.concat() → Merges arrays into a new array.
.reduce() → Generates a single output without modifying the array.
.flat() → Creates a new array by flattening nested elements.
.join() -> Concats the elements of an array into one single string seperated by given character.
.some() -> Returns true if at least one element in the array passes the test implemented by the provided function.
every() -> Returns true only if all elements in the array pass the test implemented by the provided function.
from() -> Creates a new array from an array-like or iterable object. usefull for creating array range function. also used to convert the sets or objects or strings into arrays
isArray() -> Returns true if the given value is an array.
at() -> Returns a value at the specified index.
.flat() -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
.flatMap() -> Returns a new array formed by applying a given callback function to each element of the array,
.forEach() -> forEach does not return a new array; it returns undefined.

```js
let numbers = [1, 2, 3];

numbers.forEach((number, index, arr) => {
  arr[index] = number * 2; // Modifying the array element
});

console.log(numbers); // Output: [2, 4, 6] (The array has been mutated)
```

Arrays methods will execute Synchronously unless they are part of a async function.

## Feature | for...of | for...in

Works on | Arrays, Strings, Maps, Sets | Objects, Arrays (keys only)
Returns | Values | Keys (Indexes or Property Names)
Use Case | Looping through values | Looping through property keys