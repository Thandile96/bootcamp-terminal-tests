module.exports = function fromWhere(regNumber) {
    console.log(regNumber)
      if(regNumber.startsWith("CY")) {
       return "Bellville";
     }
      if(regNumber.startsWith("CJ")) {
          return "Paarl";
        }
         if(regNumber.startsWith("CA")) {
           return "Cape Town";
         }
      else{
          return "Some other place!";
        }
    }