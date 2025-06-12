function test() {
    console.log(test.abc);
}

test();
test.abc = 400;
test.abc = 400;
test();