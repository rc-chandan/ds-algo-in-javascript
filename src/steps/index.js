function steps(n) {
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

module.exports = steps;
