const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = Array.from(''+n);
  let max = 0;
  for (let i=0; i<arr.length; i++){
    let arrCurrent = arr.slice(0);
    arrCurrent.splice(i,1)
    if (max < +arrCurrent.join('')){
      max = +arrCurrent.join('');
    };
  }
  return max;
}

  
module.exports = {
  deleteDigit
};
