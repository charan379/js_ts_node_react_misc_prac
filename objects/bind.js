const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};

const obj2 = {
  a: 5,
  b: 10,
};

const sum = obj.sum.bind(obj2);

console.log(sum());
