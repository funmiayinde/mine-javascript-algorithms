// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
function palindrome(str){
    let pan = '';
    for (let key of str) {
      pan = key + pan;
    }
   return pan === str;
 }

 function palindrome2(str) {
    return str.split('').every((elem, i) => {
        return elem === str[str.length - i -1];
    });
  }
 
 module.exports = palindrome2;