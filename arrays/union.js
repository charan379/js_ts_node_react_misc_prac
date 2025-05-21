
const arr1 = [10, 34, 23, 24, 45];
const arr2 = [5, 2, 4, 10, 34, 60];

union(arr1, arr2)
function union(arr1 = [], arr2 = []) {

    const u = [...arr1];

    for (let ele of arr2) {
        if (u.indexOf(ele) === -1) {
            u.push(ele)
        }
    }

    console.log(u.sort((a, b) => b - a))
}