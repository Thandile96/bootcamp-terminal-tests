module.exports = function countAllFromTown(regNumber) {
    console.log(regNumber);
  // change the string into an array to loop through the data
   var newList = regNumber.split(', ');
    //console.log(newList);
    //create an empty var for 'CJ' regNumbers
    var paarlRegNumber = [];
    for(var i = 0; i < newList.length; i++) {
      //console.log(regNumbers)
      // check if regNumbers startsWith("CJ")
      if(newList[i].startsWith("CJ")) {
        paarlRegNumber.push(newList[i]);
      }
      
     }
    console.log(paarlRegNumber);
  return paarlRegNumber;
  }