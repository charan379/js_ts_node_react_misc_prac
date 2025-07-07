const test2 = require("./helper");

function test() {
  console.log("from index");
  console.log((require.main === module));
}

test();
test2();
