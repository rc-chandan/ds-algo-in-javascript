// @ts-check

/**
 * --- Directions
 * Check to see if two provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same
 * characters in the same quantity. Only consider characters, not spaces
 * or punctuation.  Consider capital letters to be the same as lower case
 * --- Examples
 *  anagrams('rail safety', 'fairy tales') --> True
 *  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 *  anagrams('Hi there', 'Bye there') --> False
 */

// Solution - 2
function anagrams(stringA, stringB) {
  return clean(stringA) === clean(stringB);
}

function clean(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// Solution - 1
function anagramsOld(stringA, stringB) {
  const strA = buildCharMap(stringA);
  const strB = buildCharMap(stringB);

  if (Object.keys(strA).length !== Object.keys(strB).length) return false;

  for (let char of Object.keys(strA)) {
    if (strA[char] !== strB[char]) return false;
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (!charMap[char]) charMap[char] = 1;
    else charMap[char] += 1;
  }
  return charMap;
}

module.exports = anagrams;
