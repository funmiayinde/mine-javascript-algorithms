// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr =  str.split('');
    arr.reverse();
    return arr.join('');
  }
  
  function reverse2(str) {
    let reversed = '';
    for (let key of str){
      reversed = key + reversed;
    }
  
    return reversed;
  }
  
  function reverse3(str){
     let reversed = '';
     for (let i = str.length -1; i >= 0; i--){
         reversed +=str[i];
     }
     return reversed;
  }
  
  function reverse4(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
  }
  

module.exports= reverse3;