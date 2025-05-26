
const asyncMod = require('./asyncMod');
console.time("dsf");
async function test() {
    await asyncMod()
    setTimeout(console.log, 5000, "This is from async code");
};

test()
console.timeEnd("dsf")

// console.log(test())
