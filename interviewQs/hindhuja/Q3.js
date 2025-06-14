/**
 * Write a Node.js program that takes a number as a command-line argument 
 * and repeatedly adds its digits until the result is a single digit. 
 * Print the final single-digit sum.
 * 
 * Example:
 * If the input is 9875, 
 * the program should compute 9+8+7+5 = 29, then 2+9 = 11, 
 * then 1+1 = 2, and output 2.
 */

const args = process.argv.slice(2);

const input = Math.abs(Number(args[0]));

if (!input) {
  console.log("Please enter a number.");
  process.exit(0);
}

function sum(num) {
  const numStrArr = Array.from(String(num)); //num.toString().split('');
  const accSum = numStrArr.reduce((acc, ele) => {
    acc += Number(ele);
    return acc;
  }, 0);

  if (String(accSum).length > 1) {
    return sum(accSum);
  } else {
    return accSum;
  }
}

console.log(sum(input));
