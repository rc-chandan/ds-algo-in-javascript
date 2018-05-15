// @ts-check
const reverseInt = require('./');

describe(' - reverseInt', () => {
  test('reverseInt is a function', () => {
    expect(typeof reverseInt).toBe('function');
  });

  test('reverse postestive integer', () => {
    expect(reverseInt(123456)).toBe(654321);
  });

  test('reverse negative integer', () => {
    expect(reverseInt(-6738)).toBe(-8376);
  });

  test('throw error for non integer numbers', () => {
    expect(() =>
      reverseInt(Number.MAX_SAFE_INTEGER + 1)
    ).toThrowErrorMatchingSnapshot();
  });
});
