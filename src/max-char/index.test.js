const maxChar = require('./');

test('maxChar is a function', () => {
  expect(typeof maxChar).toBe('function');
});

test('"Hello There" should return e as max occuring char', () => {
  expect(maxChar('Hello There')).toBe('e');
});

test('"Hello 11239800111" will return 1 as max occuring char', () => {
  expect(maxChar('Hello 11239800111')).toBe('1');
});
