const arr1 = [10, 20, 30, 40, 50];
const arr2 = [10, 20, 35, 45, 55];

getSymDiff(arr1, arr2);

function getSymDiff(arr1 = [], arr2 = []) {

    const symArr = [];

    for (let ele of arr1) {
        if (arr2.indexOf(ele) === -1) {
            symArr.push(ele);
        }
    }

    for (let ele of arr2) {
        if (arr1.indexOf(ele) === -1) {
            symArr.push(ele)
        }
    }

    console.log(symArr.sort((a, b) => a - b))
};