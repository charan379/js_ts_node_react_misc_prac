const fs = require("node:fs");

fs.readdir("./", () => {
    // timeout_vs_immediate.js
    setTimeout(() => {
        console.log('timeout');
    }, 0);

    setImmediate(() => {
        console.log('immediate');
    });
})