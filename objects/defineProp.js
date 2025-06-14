var obj = {};

Object.defineProperty(obj, "a", {
  value: 2324,
  enumerable: true, //Enumerable Descriptor is a boolean value which tell if the property should be visible during iteration.
  configurable: true, // Make the property cannot be redefined
  writable: false, // Writable descriptor is a boolean value which tells us if the value can be changed or not.
});

obj.a = "werewr"; // re assign
Object.defineProperty(obj, "a", { value: "sdfdf" }); // Redefine
console.log(obj);

console.log(Object.getOwnPropertyDescriptor(obj, "a"));

for (var key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
