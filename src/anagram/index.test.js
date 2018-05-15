const { anagrams, anagramsOld } = require('./');

// Solution 1
describe(' - Anagrams', () => {
  test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
  });

  test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
  });

  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });

  test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
  });

  test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).toBeFalsy();
  });

  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
});

// Solution 2
describe(' - AnagramsOld', () => {
  test('anagrams function exists', () => {
    expect(typeof anagramsOld).toEqual('function');
  });

  test('"hello" is an anagram of "llohe"', () => {
    expect(anagramsOld('hello', 'llohe')).toBeTruthy();
  });

  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagramsOld('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });

  test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagramsOld('One One', 'Two two two')).toBeFalsy();
  });

  test('"One one" is not an anagram of "One one c"', () => {
    expect(anagramsOld('One one', 'One one c')).toBeFalsy();
  });

  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagramsOld('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
});
