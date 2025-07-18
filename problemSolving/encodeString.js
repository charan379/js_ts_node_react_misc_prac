console.log(encodeString("abccdeeefggghaaadddcceeerrr"));

function encodeString(str) {
  let encodedString = "";

  let currentElCount = 0;

  let currentEl = "";

  for (let i = 0; i < str.length; i++) {
    if (currentEl === "") {
      currentEl = str[i];
      currentElCount = 1;
    }

    if (currentEl === str[i + 1]) {
      currentElCount++;
      continue;
    } else {
      encodedString += currentEl + currentElCount;
      currentEl = "";
    }
  }

  return encodedString;
}
