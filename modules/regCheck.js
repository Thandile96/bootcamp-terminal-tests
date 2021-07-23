module.exports = function regCheck(regNumber, location) {
    if(regNumber.includes(location)) {
      return true;
    }
    else {
      return false;
    }
  }