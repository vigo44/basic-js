const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 

function minesweeper(matrix) {
  function sum (arrMatrix, k, l) {
    let sumTop=0;
    let sumBottom=0;
    let result
      if ((k) > 0) {
        sumTop = +!!arrMatrix[k-1][l-1] + +!!arrMatrix[k-1][l] + +!!arrMatrix[k-1][l+1];
      }
      if ((k+1) < matrix.length) {
        sumBottom = +!!arrMatrix[k+1][l-1] + +!!arrMatrix[k+1][l] + +!!arrMatrix[k+1][l+1];
      }
  
      result =  + +!!arrMatrix[k][l-1] + +!!arrMatrix[k][l+1] + sumTop + sumBottom;
    return result;
    }




  let result=[];
  let row = [];
  for (let i=0; i<matrix.length; i++){
    row=[];
    for (let j=0; j<matrix[i].length; j++){
      row.push(sum(matrix, i, j));
    }
    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};
