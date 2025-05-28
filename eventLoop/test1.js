const fs = require('fs');

setTimeout(() => {
    console.log('setTimeout 1');
}, 10);

fs.promises.readdir("/")
.then(f => {
    console.log(f)
})
.catch(c => {
    console.log(c)
})
