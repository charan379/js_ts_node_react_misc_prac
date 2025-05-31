const Proto = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};
console.log(Object.getPrototypeOf(Proto))
const obj = Object.create(Proto);
console.log(obj);
console.log(Object.getPrototypeOf(obj))
console.log(obj.sum(2, 3));
