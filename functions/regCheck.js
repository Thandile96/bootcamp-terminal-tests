module.exports = function(regNumber, location) {
    if(regNumber.includes(location)) {
      return true;
    }
    else {
      return false;
    }
  }