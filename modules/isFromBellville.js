module.exports = function(registrationNumber) {
  if(registrationNumber.startsWith('CY')) {
    return true;
 } 
 else {
   return false;
 }
}

// function isFromBellville(registrationNumber) {
//   console.log(registrationNumber)
//   if(registrationNumber.startsWith('CY')) {
//      return true;
//   } 
//   else {
//     return false;
//   }
// }