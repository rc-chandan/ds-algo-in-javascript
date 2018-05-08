// @ts-check
const {
  palindromeSolution1: checkPalindrome,
  palindromeSolution2
} = require('./');

describe('Palindrome', () => {
  it('checkPalindrome is a function', () => {
    expect(typeof checkPalindrome).toBe('function');
  });

  it('palindrome string should return true', () => {
    expect(checkPalindrome('reviver')).toBeTruthy();
  });

  it('non palindrome string should return false', () => {
    expect(checkPalindrome('chandan')).toBeFalsy();
  });
});

describe('Check palindrome solution 2', () => {
  // solution 2
  it('checkPalindrome is a function', () => {
    expect(typeof palindromeSolution2).toBe('function');
  });

  it('palindrome string should return true', () => {
    expect(palindromeSolution2('reviver')).toBeTruthy();
  });

  it('non palindrome string should return false', () => {
    expect(palindromeSolution2('chandan')).toBeFalsy();
  });
});
