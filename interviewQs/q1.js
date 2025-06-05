/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Example 3:
Input: s = "(]"
Output: false
 * 
 */

const pairs = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function getSections(str) {
  const strLen = str.length;

  const sections = [];

  for (let i = 0; i < strLen; i = i + 2) {
    const pair = str.slice(i, i + 2);
    sections.push(pair);
  }

  return sections;
}

function testSection(section) {
  if (pairs[section.split("")[0]] === section.split("")[1]) {
    return true;
  } else {
    return false;
  }
}

const sections = getSections("(){}[}");
console.log(sections);
sections.forEach((element) => {
  console.log(testSection(element));
});

// getSections("(){}[]");
// getSections("{]");
