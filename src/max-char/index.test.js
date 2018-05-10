const maxChar = require('./');

describe('Max character in a string', () => {
  it('maxChar should be a function', () => {
    expect(typeof maxChar).toBe('function');
  });

  it('should return max char in a string', () => {
    expect(maxChar('Hello There')).toBe('e');
  });

  it('should work with numbers in the string', () => {
    expect(maxChar('Hello 11239800111')).toBe('1');
  });
});
