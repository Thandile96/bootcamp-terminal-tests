module.exports = function findItemsOver20(itemList){
    //console.log(itemList)
      var expensiveItems = [];
      
      for( var i=0; i<itemList.length; i++) {
        if(itemList[i].qty > 20) {
        expensiveItems.push(itemList[i]);
        } 
      }
     //console.log(expensiveItems);
      return expensiveItems;
    }