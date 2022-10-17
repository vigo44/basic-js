const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  for (let i=0; i<arr.length; i++){
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if ((result.length)&&((result[result.length-1])===(arr[i-1]))) {
          result.pop();
        }
        break;
      case '--double-next':
        if ((i+1)<arr.length) {
          result.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if ((result.length)&&((result[result.length-1])===(arr[i-1]))) {
          result.push(result[result.length-1]);
        }
        break;
      default: 
      result.push(arr[i]);   
    }
  }
  return result;
}

module.exports = {
  transform
};
