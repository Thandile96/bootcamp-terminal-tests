module.exports = function(regNumber) {
    console.log(regNumber);
    var reg = regNumber.split(',');
    return reg.length;
  }