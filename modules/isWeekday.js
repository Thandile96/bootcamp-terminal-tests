module.exports = function(day) {
    if(day.startsWith("M") || day.startsWith("T") || day.startsWith("F")) {
       return true;
    }
       else {
         if(day.startsWith("S")) {
            return false;
         }
       }
  }