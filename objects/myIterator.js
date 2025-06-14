let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

Object.defineProperty(obj, "iterator", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function () {
    const self = this;
    let currIdx = 0;
    const keys = Object.keys(self);

    return {
      next: function () {
        return obj[keys[currIdx++]];
      },
      hasNext: function () {
        return keys.length > currIdx;
      },
    };
  },
});


const myit = obj.iterator();

console.log(myit.next())
console.log(myit.hasNext())
console.log(myit.next())
console.log(myit.hasNext())
console.log(myit.next())
console.log(myit.hasNext())
console.log(myit.next())
console.log(myit.hasNext())
console.log(myit.next())