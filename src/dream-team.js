const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  arrString = [];
  if (!Array.isArray(members)) {
    return false;
  }
  if (members.length===0) {
    return false;
  }
  for (let i=0; i < members.length; i++){
    if (typeof members[i] === 'string') {
      members[i]=members[i].replace(/\s/g,'')};
    if  ((typeof members[i] === 'string') && !(members[i].length === 0) && (Number.isNaN(+members[i][0]))) {
      arrString.push(members[i].replace(/\s/g,'')[0].toUpperCase());
    }
  }
  arrString.sort();
  return arrString.join('')
}

module.exports = {
  createDreamTeam
};
