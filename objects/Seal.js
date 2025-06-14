var obj = {
    a : 2,
    b : 3,
    c : 4
};

Object.seal(obj);
obj.d = 100; // throws error in strict mode 
console.log(obj.d);