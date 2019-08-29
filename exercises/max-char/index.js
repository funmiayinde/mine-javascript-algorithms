// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars ={};
    let max= 0;
    let maxChar =  '';

    // for...of iterates through
    // the values
    for (let value of str){
        if (chars[value]){
            chars[value]++;
        }else{
            chars[value] = 1;
        }
    }
    // for...in iterates through
    // the properities 
    for (let key in chars) {
        if (chars[key] > max){
            max = chars[key];
            maxChar = key;
        }
    }
    return maxChar;
}

module.exports = maxChar;
