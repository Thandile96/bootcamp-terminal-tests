module.exports = function isWeekday(day) {
    if(day.startsWith("M") || day.startsWith("T")  || day.startsWith("W")|| day.startsWith("F")) {
       return true;
    }
       else {
         if(day.startsWith("S")) {
            return false;
         }
       }
  }