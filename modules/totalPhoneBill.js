module.exports = function(phoneActivity) {
    console.log(phoneActivity)
    var newList = phoneActivity.split(", ");
    //console.log(newList)
  var total = 0;
    for(var i = 0; i < newList.length; i++) {
    if(newList[i] === "sms" ) {
     total += 0.65;
    }
      
    if(newList[i] === "call") {
     total += 2.75;
    }
    }
   return "R"+total.toFixed(2);
  }