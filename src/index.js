  module.exports = function getZerosCount(number) {
      let count = 0;
      
      for (let i = 1; i <= number; i++) {
          let temp = i;
          
          while (temp % 5 === 0) {
              temp /= 5;
              count++;
          }
      }
      
      return count;
  }
