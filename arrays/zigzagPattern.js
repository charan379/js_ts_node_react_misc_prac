
const n = Number(process.argv.slice(2)[0]);

function zigzagPattern(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(num++)
        }

        if (i % 2 === 0) row.reverse();

        console.log(row.join(" "))
    }
};

zigzagPattern(n)