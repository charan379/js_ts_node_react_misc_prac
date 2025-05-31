console.log("A");

setTimeout(() => {
  console.log("D");
});

["C", "E"].forEach((a) => {
  console.log(a);
});

console.log("B");