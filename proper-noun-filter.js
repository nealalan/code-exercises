// note: you need define the parameters in the function if needed

// returns true if the first letter is upper and remaining chars are lower case
//   Regex is using a word boundary to match the first letter to A-Z and 
//   anything preceeding the end of the boundary except the first letter to a-z       
const properNounFilter = (inputStr = '') => (/\b[A-Z]{1}[a-z]+\b/).test(inputStr);

module.exports = properNounFilter;

/*
console.log(properNounFilter('Dog'));  // true
console.log(properNounFilter('cat'));  // false
console.log(properNounFilter('BiRd')); // false
console.log(properNounFilter('PIG')); // false
*/