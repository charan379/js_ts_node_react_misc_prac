
function range(start, end) {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
};

console.log(range(25, 40));