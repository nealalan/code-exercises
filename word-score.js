/*
Create the function highestScore that returns the string with the highest score 
total. The "highest" score is calculate based on where each character is positioned 
in the alphabet. For example, the letter "a" is the first letter and is worth 1 
point, while "z" is the last letter and worth 26 points.

Example:
INPUT: `highestScore('Hello World');
OUTPUT: 'world';
*/

var letterVal= {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, 
                L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, 
                V: 22, W: 23, X: 24, Y: 25, Z: 26};

const highestScore = (inputString) => {
    let score = {value: 0, word: ''};
    
    // break the sentence, separated, into an array of words
    let inputStringArray = inputString.split(' ');
    //console.log(inputString);
    // parse through the array of strings looking for the highest value word
    for (let i = 0; i < inputStringArray.length; i++) {
        let currentWordScore = 0;
        // change to uppercase for scoring only
        let currentWord = inputStringArray[i].toUpperCase();
        // calc the score for currentWord
        for (let j = 0; j < currentWord.length; j++) currentWordScore += letterVal[currentWord[j]];
        // check for a new high score
        if (currentWordScore > score.value) {
            score.value = currentWordScore;
            score.word = inputStringArray[i];
        }
    }
    // the test conditions want lower case (would prefer to see this spelled out 
    //   in business requirements :)
    return score.word.toLowerCase();
}

console.log(highestScore('What is the highest scored word?'));