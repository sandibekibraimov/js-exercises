// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}

module.exports = steps;

// solution #1
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let stairs = '';

//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stairs += '#';
//       } else {
//         stairs += ' ';
//       }
//     }
//     console.log(stairs);
//   }
// }
