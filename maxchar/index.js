// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}; //create a character map of the string where each char acts as key and its count as val

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  debugger;

  let maxCount = 0;
  let maxChar = "";

  //iterate over eack key and store the maximum count in maxCount and corresponding char in maxChar
  for (let char in chars) {
    if (chars[char] > maxCount) {
      maxCount = chars[char];
      maxChar = char;
    }
  }
  //console.log(maxChar);
  return maxChar;
}

//maxChar("aaaacde");

module.exports = maxChar;
