// "use strict";

// var name = "lockedBox";

// console.log("lockedBox.js loaded", name);


var box = {
    locked: true,
    lock: function () {
        this.locked = true;
    },
    unlock: function () {
        this.locked = false;
    },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error("Box is locked !")
        }
        return this._content;
    }
};

// box.unlock();
console.log(box.content)
