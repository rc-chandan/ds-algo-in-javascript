// @ts-check
// Reverse an integer

// Solution 1
function reverseInt(n) {
  if (!Number.isSafeInteger(n)) throw new Error('Not an integer');

  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  // Add the sign back
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
