const arr = [1, 2, 3, 4, 5];
const index = 2;

for (let i = index; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}

arr.length = arr.length - 1;

console.log(arr);

async function foo() {
  console.log("A");
  await   Promise.resolve();
  console.log("B");
  await  new Promise((resolve) => setTimeout(resolve, 0));
  console.log("C");
}
console.log("D");
foo();
console.log("E");
