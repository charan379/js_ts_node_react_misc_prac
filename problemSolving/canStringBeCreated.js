// query -> yqeur

console.log(canStringBeCreated("madam", "madam"));

function canStringBeCreated(string1, string2) {
  if (!string1 || !string2 || string1.length !== string2.length) {
    return false;
  }

  const string1CharMap = createCharMap(string1);
  const string2CharMap = createCharMap(string2);

  return Object.keys(string1CharMap).every(
    (key) => string1CharMap[key] === string2CharMap[key]
  );
}

function createCharMap(str) {
  //   {[char]: [count]}
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    char in charMap ? (charMap[char] += 1) : (charMap[char] = 1);
  }

  return charMap;
}
