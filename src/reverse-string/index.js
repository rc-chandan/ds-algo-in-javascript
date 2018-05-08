// @ts-check
// String Reversal

// Solution 1
function stringReverseSolution1(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution 2
function stringReverseSolution2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// Solution 3
// Learn more about [Array.reduce] {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce}
function stringReverseSolution3(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

module.exports = {
  stringReverseSolution1,
  stringReverseSolution2,
  stringReverseSolution3
};
