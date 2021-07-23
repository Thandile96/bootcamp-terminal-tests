module.exports = function(departMent){
    //console.log(department.length)
      var departMentMap = {};
      //console.log(departmentMap)
      for(var i=0; i<departMent.length; i++) {
     // console.log(department[i])
        var departments = departMent[i];
       //get total sales per department
        departMentMap[departments.department] = 0;
      }
      //console.log(departMentMap);
      
      for(var i=0; i<departMent.length; i++){
        var currentDepartment = departMent[i];
        //console.log(currentDepartment);
        
        var currentSalesTotal =  departMentMap[currentDepartment.department];
        currentSalesTotal += currentDepartment.sales;
        
        departMentMap[currentDepartment.department] = currentSalesTotal;
        
      }
     console.log(departMentMap);
      //console.log(departMentMap[currentDepartment.department]);
      
      // Find the most profitable department
      
      var totals = 0;
      var depart = "";
      
      for (var profit in departMentMap){
        //console.log(departMentMap);
        //console.log(departMentMap[profit]);
        
        var profitSale = departMentMap[profit];
        if (profitSale > totals){
          totals = profitSale;
          depart = profit;
        
        }
      
      }
      //console.log(depart);
      return depart
    }