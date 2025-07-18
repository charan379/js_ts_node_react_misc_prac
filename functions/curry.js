// Currying turns a function with multiple arguments into a
// chain of functions, each taking one argument at a time.

function multiply(a) {
  return function inner(b) {
    return a * b;
  };
}

// one way
// const double = multiply(2);
// console.log(double(50));

// other way
// console.log(multiply(10)(3))

const m = (a) => (b) => a * b;

console.log(m(10)(2));

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

outer()(); // --> Currying
