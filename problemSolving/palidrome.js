console.log(checkPalindrome("madam"))

function checkPalindrome(str) {
  const reversedStr = Array.from(str).reverse().join("");
  return new RegExp(str).test(reversedStr)
}