const arr = [1, 2, 3];

const res = arr.flatMap((el) => [el, el * el]);

console.log(res);