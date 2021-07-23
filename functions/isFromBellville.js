module.exports = function(registrationNumber) {
  if(registrationNumber.startsWith('CY')) {
    return true;
 } 
 else {
   return false;
 }
}
