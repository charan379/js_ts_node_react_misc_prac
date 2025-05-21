"use strict";

const str = process.argv.slice(2)[0];

if (!str && typeof str !== "string") {
    throw new Error("Please provide valid string to reverese");
};

const reveresedStrWords = [];

for (let word of str.split(" ")) {
    // inbuilt methods
    // const reversedWord = word.split("").reverse().join("")
    // custom method
    const reversedWord = revereseAWord(word)

    reveresedStrWords.push(reversedWord);
};

console.log(reveresedStrWords.join(" "));


function revereseAWord(word) {
    let reversedWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}