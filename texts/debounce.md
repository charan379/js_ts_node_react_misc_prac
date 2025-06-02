Debouncing is a technique where you delay the execution of a function untill after a certian ammount of time has passed.
This is useful if you have a frequently used function---say, a scroll or resize event listener, and don't want to trigger it too frequently because that might slow down the browser.

No matter how many times the user fires the event, the connected function will only run once the user stops firing the event, according to the Debouncing approach.

Ex: Imagine that a user clicks a button five times in the space of 100 milliseconds. That function won't be called during debouncing. If the debouncing time is 2000 milliseconds after the user has ceased clicking,
the fucntion will be called 2000 milliseconds later.

Code:

```js
function debounce(func, delay) {
    let timerId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}
```