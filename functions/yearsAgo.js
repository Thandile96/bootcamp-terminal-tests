module.exports = function yearsAgo(year){
    var current = new Date();
      console.log(current);
    var year2 = current.getFullYear(); 
     console.log(year2);
     
   return year2-year;
  }