function stepsOld(n) {
  for (let line = 1; line <= n; line++) {
    let stair = '';
    for (let pound = 1; pound <= line; pound++) {
      stair += '#';
    }
    for (let space = 1; space <= n - line; space++) {
      stair += ' ';
    }

    console.log(stair);
  }
}

// Recursive
function stepsRecursive(n, row = 0, stair = '') {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return stepsRecursive(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  stepsRecursive(n, row, stair + add);
}

// Iterative
function steps(n) {
  for (let row = 1; row <= n; row++) {
    let stair = '';

    for (let column = 1; column <= n; column++) {
      stair += column <= row ? '#' : ' ';
    }

    console.log(stair);
  }
}

module.exports = steps;
