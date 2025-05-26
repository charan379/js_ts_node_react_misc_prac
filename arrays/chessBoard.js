const chessBoard = {};

const alphas = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H" };

for (let i = 1; i <= 8; i++) {
    let row = [];

    for (let j = 1; j <= 8; j++) {
        row.push(j + (i * 7) - 8);
    }

    chessBoard[alphas[9 - i]] = row;
}

console.log(chessBoard)