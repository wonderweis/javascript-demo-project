'use strict'

module.exports = {

 /* Find the average of three integers */
 computeAverage: function(num1, num2, num3) {
   var average = (num1 + num2 + num3)/3;
   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: function(num) {
   var factorial = 1;
   for(var i = num; i>0; i--){
   	factorial *= i;
   }
   return factorial;
 },

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: function(cTemp) {
   var fTemp = (9 * cTemp / 5) + 32;
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: function(fTemp) {
   var cTemp = 5 * (fTemp - 32 )/ 9;
   return cTemp;
 }

}
