// Vanila logic
function vowelsOld(string) {
  let counter = 0;

  for (let char of string.toLowerCase()) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    )
      counter++;
  }

  return counter;
}

// Stirng helper
function vowels1(string) {
  let counter = 0;
  let cheker = 'aeiou';

  for (let char of string.toLowerCase()) {
    if (cheker.includes(char)) counter++;
  }

  return counter;
}

// making it more readable with array helper
function vowels(string) {
  let counter = 0;
  let cheker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of string.toLowerCase()) {
    if (cheker.includes(char)) counter++;
  }

  return counter;
}

// REGEX and all the cool stuff
function vowelsREGEX(string) {
  /*
    1. /.../ represents a REGEX
    2. [aeiou] match any of the chars
    3. g do not stop at first match
    4. i ignore case
    5. string.match(regex) returns array of matches or null
   */
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels('Why do you ask?'));

module.exports = vowels;
