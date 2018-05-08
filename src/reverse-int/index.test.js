// @ts-check

const reverseInt = require('./');

describe('Reverse Integer', () => {
  it('reverseInt is a function', () => {
    expect(typeof reverseInt).toBe('function');
  });
  it('reverse positive integer', () => {
    expect(reverseInt(123456)).toBe(654321);
  });

  it('reverse negative integer', () => {
    expect(reverseInt(-6738)).toBe(-8376);
  });

  it('throw error for non integer numbers', () => {
    expect(() =>
      reverseInt(Number.MAX_SAFE_INTEGER + 1)
    ).toThrowErrorMatchingSnapshot();
  });
});
