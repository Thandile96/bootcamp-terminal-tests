module.exports = function countRegNumber(regNumber) {
    console.log(regNumber);
    var reg = regNumber.split(',');
    return reg.length;
  }