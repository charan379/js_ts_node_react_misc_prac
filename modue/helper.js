function test() {
  console.log("from test");
  console.log(require.main === module);
}

module.exports = test;
