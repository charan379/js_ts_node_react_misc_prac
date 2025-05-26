
const EventEmitter = require("events");

const e = new EventEmitter();


e.on("success", (data) => {
    console.log(data);
});

e.once("success", (s) => console.log(s + '34'))

e.on("fail", (data) => {
    console.log(data);
});

const myPromise = new Promise((res, rej) => {

    let success = true;

    setTimeout(() => {
        if (success) {
            res("This promise is successfully resolved");
        } else {
            rej("This promise is failed to resolve");
        }
    }, 2000)
});

myPromise.
    then((d) => {
        e.emit("success", d)
    })
    .catch((d) => e.emit("fail", d));

console.log("We are running the promise program");