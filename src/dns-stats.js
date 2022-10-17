const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const result = {};
  for (let i=0; i<domains.length; i++){
    let domain = domains[i].split('.').reverse();
    domain.forEach((elem, index) => {
      domain[index]='.'+ domain[index];
    });
    let currentDomain = '';
    for (let j=0; j<domain.length; j++){
      currentDomain=currentDomain+domain[j];
      if (currentDomain in result){
        result[currentDomain]++;
      }else {
        result[currentDomain]= 1;
      }
      
    }
    
  }
  return result;
}


module.exports = {
  getDNSStats
};
