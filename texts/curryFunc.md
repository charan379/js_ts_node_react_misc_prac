### Currying is the process of transforming a function with multiple arguments into a sequence of functions each taking a single argument.

```js
// Normal function
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2, 3)); // 5
console.log(curriedAdd(2)(3)); // 5
```

```js
const curriedMultiply = (a) => (b) => a * b;

console.log(curriedMultiply(2)(4)); // 8
```

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

- HOF is about function interaction (takes/returns a function).
- Currying is about function transformation (multiple → chained unary functions).
- All curried functions are HOFs, but not all HOFs are curried.
