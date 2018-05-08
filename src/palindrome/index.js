// @ts-check
// Check if a given string is palindrome or not

// Solution 1
function palindromeSolution1(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return reversed === str;
}

// Solution 2
function palindromeSolution2(str) {
  return str
    .split('')
    .every((char, index) => char === str[str.length - index - 1]);
}

module.exports = {
  palindromeSolution1,
  palindromeSolution2
};
