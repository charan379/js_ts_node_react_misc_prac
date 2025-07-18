console.log(fact(4));

function fact(number) {
  if (number && typeof number === "number" && !isNaN(number)) {
    if (number === 0 || number === 1) {
      return 1;
    }

    return number * fact(number - 1);
  } else {
    throw new Error("Invalid input");
  }
}
