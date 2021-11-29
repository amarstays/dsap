// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reverse = require("../reversestring/index");

//Method-1: Use any of the existing sting reversal function
// function palindrome(str) {
//   return str == reverse(str);
// }
//Method-2: Use the every function of the array
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
