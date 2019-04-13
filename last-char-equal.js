/*
Last Character: Define a function lastCharacter that accepts two strings as arguments. lastCharacter should return true if both strings end with the same character. Otherwise, lastCharacter should return false.

lastCharacter('apples', 'pumpkins'); // => true

lastCharacter('marker', 'pen'); // => false
*/
// YOUR CODE BELOW

const lastCharacter = (...strings) => strings[0][strings[0].length - 1] === strings[1][strings[1].length - 1];
