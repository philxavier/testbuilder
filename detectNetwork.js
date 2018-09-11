// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.slice(0,4);
 console.log(prefix)
 var numLength = cardNumber.length
 if ((prefix.slice(0,2) === '38' && numLength === 14) || (prefix.slice(0,2) === '39' && numLength === 14)) {
   return "Diner's Club";
 } else if ((prefix.slice(0,2) === '34' && numLength === 15) || (prefix.slice(0,2) === '37' && numLength === 15)) {
   return "American Express";
 } else if ((parseInt(prefix.slice(0,2)) >= 40 && parseInt(prefix.slice(0,2)) < 48) && (numLength === 13 || numLength === 16 || numLength === 19)){
   return "Visa";
 } else if ((prefix.slice(0,2) === '60' && numLength === 16) || (prefix.slice(0,2) === '60' && numLength === 19) || (prefix.slice(0,2) === '64' && numLength === 19 ) || (prefix.slice(0,2) === '64' && numLength === 16) || (prefix.slice(0,2) === '65' && numLength === 19 ) || (prefix.slice(0,2) === '65' && numLength === 16)) {
   return 'Discover';
 } else if ((prefix.slice(0,2) === '50' && numLength >=12 && numLength <= 19) || (prefix === '6304' && numLength >=12 && numLength <= 19)) {
   return 'Maestro';
 } else if (prefix.slice(0,2) >= '51' && prefix.slice(0,2) <= '55' && numLength === 16) {
   return "MasterCard";
 } else if (prefix.slice(0,2) === '62' && numLength >= 16 && numLength <= 19) {
   return 'China UnionPay';
 } else if ((prefix.slice(0,2) === '49' && numLength >= 16 && numLength <= 19) || (prefix.slice(0,2) === '56' && numLength >= 16 && numLength <= 19) || (prefix === '6331' && numLength >= 16 && numLength <= 19) || (prefix === '6333' &&  numLength >= 16 && numLength <= 19) || (prefix.slice(0,2) === '67' && numLength >= 16 && numLength <= 19)) {
   return 'Switch'
 }
};
