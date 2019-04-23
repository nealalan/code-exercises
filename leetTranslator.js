/*
Leet Translator
"Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

Define a function called leetTranslator that take a string of normal 
characters.

leetTranslator should return a new string that is the translation of the 
original string into leet.

The leet codex is below, along with an array of english letters and an 
array of the corresponding leet characters. Use the two arrays to create 
a leetCodex object to use in making the translations.
*/

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

const leetTranslator = (inputString) => {
    let input = inputString.toLowerCase();
    let leetDict = {' ':' '};
    let outputString = '';
    // load the letters and leetChars into the Object leetDict
    for (let i = 0; i < letters.length; i++) leetDict[letters[i]] = leetChars[i];

    for (let i = 0; i < input.length; i++) outputString += leetDict[input[i]];
    return outputString;
}

console.log(leetTranslator('fullstack'));
console.log(leetTranslator('Hopper'));
console.log(leetTranslator('  abcdefghijklmnopqrstuvwxyz   '));