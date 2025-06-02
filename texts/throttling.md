Throttling is a similar technique to debouncing, but instead of delaying the execution of a fucntion, it limits the rate at which a fucntion, it limits the rate at which a function.
This is useful when a function, such as a mousemove or keydown event listner, may be called repeatedly but need not be run each time.

Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
Throttling ensures that the function executes at regular intervals.

Code: 
```js
function throttle(callback, delay = 1000) {
    let shouldWait = false;
    return (...args) => {
        if(shouldWait) return;
        callback(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
}
```