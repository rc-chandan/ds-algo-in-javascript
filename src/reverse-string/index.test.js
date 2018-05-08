// @ts-check
const {
  stringReverseSolution1,
  stringReverseSolution2: reverseString,
  stringReverseSolution3
} = require('./');

describe('Reverse String', () => {
  it('reverseString is a function', () => {
    expect(typeof reverseString).toBe('function');
  });

  it('should reverse a passed string', () => {
    expect(reverseString('sample')).toBe('elpmas');
  });
});

describe('Reverse String solution 1', () => {
  it('reverseString is a function', () => {
    expect(typeof stringReverseSolution1).toBe('function');
  });

  it('should reverse a passed string', () => {
    expect(stringReverseSolution1('sample')).toBe('elpmas');
  });
});

describe('Reverse String solution 3', () => {
  it('reverseString is a function', () => {
    expect(typeof stringReverseSolution3).toBe('function');
  });

  it('should reverse a passed string', () => {
    expect(stringReverseSolution3('sample')).toBe('elpmas');
  });
});
