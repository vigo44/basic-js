const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = Array.from(str);
  let result = [];
  for (let i=0; i<arr.length; i++){
    if (arr[i]!==arr[i+1]){
      result.push(arr[i])
    } else{
      let value = arr[i];
      let amount = 2;
      i++
      while (value === arr[i+1]){
        amount++;
        i++;
      }
      result.push(''+ amount + value );
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
