setTimeout(() => {
    console.log('setTimeout'); // Macro-task
}, 0);

setImmediate(() => {
    console.log("immediate")
});

Promise.resolve().then(() => {
    console.log('Promise'); // Micro-task
});

process.nextTick(() => {
    console.log('nextTick'); // Micro-task
});

console.log('Initial'); // Synchronous