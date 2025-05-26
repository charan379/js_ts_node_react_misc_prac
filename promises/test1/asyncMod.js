module.exports = () => {
    return new Promise((resolve, reject) => {
        resolve(setTimeout(console.log, 6000, "This is from the async module"))
    });
}

// console.log(require.main === module);