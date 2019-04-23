/*
Frequency Analysis
Define a function frequencyAnalysis that accepts a string of lower-case letters.

frequencyAnalysis should return an object containing the count for each letter in the string.
*/

const frequencyAnalysis = (inputString) => {
    let letterCount = {};

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] != ' ') {
            if (letterCount[inputString[i]]) letterCount[inputString[i]] = letterCount[inputString[i]] + 1;
            else letterCount[inputString[i]] = 1;
        }
    }
    return letterCount;
}

console.log(frequencyAnalysis('abca')); // => {a: 2, b: 1, c: 1}
console.log(frequencyAnalysis('i like to eat meat and fruit but not zoo animals for dinner'));