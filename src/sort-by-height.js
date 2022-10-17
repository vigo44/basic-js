const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let height = [];
  let result = [];
  arr.forEach(elem=>{
    if (elem !== -1){
      height.push(elem);
    }
  });
  height.sort((a,b)=>{
    return a-b ;
  });
  arr.forEach(elem=>{
    if (elem === -1){
      result.push(-1);
    }else{
      result.push(height.shift())
    }
  })
  return result;
}

module.exports = {
  sortByHeight
};
