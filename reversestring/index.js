// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method-1: using array reverse function
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//Method:2: Using for loop
// function reverse(str) {
//   let rs = "";
//   for (let char of str) {
//     rs = char + rs;
//   }
//   return rs;
// }

//method:3: using reducer function
// function reverse(str) {
//   let rs = str.split("");

//   return rs.reduce((rev, char) => {
//     return char + rev;
//   }, "");
// }

// method-4: Using recursion
function reverse(str) {
  if (str === "") return str;
  else return reverse(str.substr(1)) + str.charAt(0);
}

module.exports = reverse;
