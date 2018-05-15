// @ts-check
const {
  stringReverseSolution1,
  stringReverseSolution2: reverseString,
  stringReverseSolution3
} = require('./');

// Solution 1
describe(' - stringReverseSolution1', () => {
  test('reverseString is a function', () => {
    expect(typeof reverseString).toBe('function');
  });

  test('should reverse a passed string', () => {
    expect(reverseString('sample')).toBe('elpmas');
  });
});
// Solution 2
describe(' - stringReverseSolution2', () => {
  test('reverseString is a function', () => {
    expect(typeof stringReverseSolution1).toBe('function');
  });

  test('should reverse a passed string', () => {
    expect(stringReverseSolution1('sample')).toBe('elpmas');
  });
});

// Solution 3
describe(' - stringReverseSolution3', () => {
  test('reverseString is a function', () => {
    expect(typeof stringReverseSolution3).toBe('function');
  });

  test('should reverse a passed string', () => {
    expect(stringReverseSolution3('sample')).toBe('elpmas');
  });
});
