
const arr = [2, 3, 53, 7, 5, 3, 1, 8];

console.time("w")
for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            let swap = arr[j];
            arr[j] = arr[i];
            arr[i] = swap;
        };
    }
}
console.timeEnd("w")
console.log(arr);