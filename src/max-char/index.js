// @ts-check

// Find maximum occuring char in a string
function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] !== undefined ? charMap[char] + 1 : 1;
  }

  return Object.keys(charMap).reduce(
    (maxChar, char) => (charMap[char] > charMap[maxChar] ? char : maxChar)
  );
}

module.exports = maxChar;
