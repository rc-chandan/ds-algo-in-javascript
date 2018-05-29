/* 
pyramid(5):

'____#____' , n=5, row=0, pound at: 4->4
'___###___' , n=5, row=1, pound at: 3->5
'__#####__' , n=5, row=2, pound at: 2->6
'_#######_' , n=5, row=3, pound at: 1->7
'#########' , n=5, row=4, pound at: 0->8
              In general pound at: n-1-row -> n-1+row

if(col >= n-1-row && col <= n-1+row)
  print('#');
else
  print(' '); 

*/

// Iterative
function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (column >= n - 1 - row && column <= n - 1 + row) level += '#';
      else level += ' ';
    }

    console.log(level);
  }
}

// Recursive
function pyramidRecursive(n, row = 0, level = '') {
  if (n === row) return;

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramidRecursive(n, row + 1);
  }

  const add =
    level.length >= n - 1 - row && level.length <= n - 1 + row ? '#' : ' ';

  pyramidRecursive(n, row, level + add);
}

module.exports = pyramid;
