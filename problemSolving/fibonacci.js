console.log(fibonacci(10));

function fibonacci(num) {
  let fibSequence = [0, 1];

  for (let i = 2; i < num; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}
