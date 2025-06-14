### A closure is when a function "remembers" the variables from its outer lexical scope, even after that outer function has finished executing.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn(); // 1
fn(); // 2
```
