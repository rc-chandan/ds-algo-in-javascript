// @ts-check
const {
  palindromeSolution1: checkPalindrome,
  palindromeSolution2
} = require('./');

// Solution 1
describe(' - palindromeSolution1', () => {
  test('checkPalindrome is a function', () => {
    expect(typeof checkPalindrome).toBe('function');
  });

  test('palindrome string should return true', () => {
    expect(checkPalindrome('reviver')).toBeTruthy();
  });

  test('non palindrome string should return false', () => {
    expect(checkPalindrome('chandan')).toBeFalsy();
  });
});

// solution 2
describe(' - palindromeSolution2', () => {
  test('checkPalindrome is a function', () => {
    expect(typeof palindromeSolution2).toBe('function');
  });

  test('palindrome string should return true', () => {
    expect(palindromeSolution2('reviver')).toBeTruthy();
  });

  test('non palindrome string should return false', () => {
    expect(palindromeSolution2('chandan')).toBeFalsy();
  });
});
