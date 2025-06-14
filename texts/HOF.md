### A higher-order function is a function that either:

- ### Takes another function as an argument, or
- ### Returns a function as its result.

```js
function greet(name) {
  return `Hello, ${name}`;
}

function callWithLog(fn, value) {
  console.log(fn(value));
}

callWithLog(greet, "charan");

function higherOrderFunction() {
  return function innerFunction() {
    console.log("Hello from inner function");
  };
}

const d = higherOrderFunction();
d();
```
