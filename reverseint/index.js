// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n === 0) return 0;

  if (Math.sign(n) > 0) {
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed);
  }

  if (Math.sign(n) < 0) {
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * -1;
  }

  //   if(Math.sign() < 0) {
  //       let string = n.toString().split('').reverse();

  //   }
}

module.exports = reverseInt;
