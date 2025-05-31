class A {
  constructor() {}
}

console.log(new A()); // A {}
console.log(A.constructor); // [Function: Function]
console.log(A); // [class A]
console.log(typeof A); // "function"

function test() {}
console.log(test); // [Function: test]
console.log(typeof test); // "function"
const test2 = () => {};
console.log(test2); // [Function: test2]
console.log(typeof test2); // "function"
const we = [];
console.log(typeof we); // "object"
const wq = {};
console.log(typeof wq); // "object"

const p = () => {
  return new Promise((resolve, reject) => {});
};

console.log(p()); // Promise { <pending> }
console.log(typeof p()); // object
