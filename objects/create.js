const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};

const obj2 = Object.create(obj);

(obj2.a = 4), (obj2.b = 6), console.log(obj2.sum());

console.log(obj2);
// console.log(Object.getPrototypeOf(obj2));
