console.log(findLongestWord("The the one sentence that.. ....... ....... has some words in it."));

function findLongestWord(sentence) {
  const wordsArr = sentence.split(" ");
  let longestWord = "";
  for (let word of wordsArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    } else {
      continue;
    }
  }
  return longestWord;
}
