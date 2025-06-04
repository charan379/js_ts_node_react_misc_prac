## Pure Function

A function is said to be a pure function when it return the same output for every same input, and has no side effects and not having access to any external variables and doesn't modifies any variables outside of its scope.

Deterministic: Given the same inputs, it always returns the same output.
No Side Effects: It does not modify external variables, state, or data outside its scope.
Referential Transparency: Can be replaced with its output without changing the program's behavior.

```js
function add(a, b) {
  return a + b; // No external state is modified
}
console.log(add(2, 3)); // Always 5
```

## Impure Function
A function is impure if it interacts with external state/variables or modifies it or produces different output's for same input.

Non-Deterministic: Output may vary even with the same inputs.
Side Effects: Can modify variables, perform I/O operations, or rely on external state.
State Dependency: Behavior depends on factors outside the function's scope.

```js
let count = 0;
function increment() {
  count++; // Modifies external state
  return count;
}
console.log(increment()); // Output depends on `count`
```