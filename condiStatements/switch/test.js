
const args = process.argv.slice(2);

function test(value) {
    switch (Number(value)) {
        case 10: {
            console.log(10);
            break;
        }
        case 20: {
            console.log(20);
            break;
        }
        default: {
            console.log("Invalid value : ", value);
        }
    }
}
console.log(args)
test(args[0])

// if this is the main file ran by node.
console.log(require.main == module)