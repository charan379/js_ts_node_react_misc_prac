/**
 * A function remembers the variables from
 * its outer scope even after the outer function has finished.
 */

function outer() {
  let count = 0;

  return function inner() {
    return ++count;
  };
}

const inner = outer();
console.log(inner())
console.log(inner())
console.log(inner())

console.log("\n")
const counter = outer();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
