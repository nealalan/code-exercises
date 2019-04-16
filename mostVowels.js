/*
Most Vowels
Define a function, mostVowels, that accepts one argument, a string of words.

mostVowels should return the word that has the most vowels.
mostVowels('I am a keeper with some real rhythms'); // => keeper

If none of the words have any vowels, return an empty string.
mostVowels('try my gym'); // => ''
*/

const mostVowels = (stringOfWords) => {
    // remove periods from the string
    let theWords = stringOfWords.split('.').join("");
    // spit the string of words into strings of words where seperated by a space
    theWords = theWords.split(' ');
    let theWinner = '', theWinnerVowelCount = 0;
    
    for (let i = 0, vowelsCount = 0; i < theWords.length; i++, vowelsCount = 0) {
        // count the number of vowels in the current word 
        for (let j = 0; j < theWords[i].length; j++) 
            // use a regex to see if the letters (j) in the word (i) is a vowel
            if ((/^[aeiou]$/i).test(theWords[i][j])) vowelsCount++;
        if (vowelsCount > theWinnerVowelCount) {
            theWinner = theWords[i];
            theWinnerVowelCount = vowelsCount;
        }
    }
    return theWinner;
}

console.log('returns a function: ' + typeof mostVowels);
console.log('returns a string: ' + typeof mostVowels('Wit beyond measure is man\'s greatest treasure.'));
console.log('returns : ' + mostVowels('Wit beyond measure is man\'s greatest treasure.'));
console.log('returns : ' + mostVowels('Give her hell from us, Peeves.'));
console.log('returns : ' + mostVowels('DOG DODGED'));
console.log('returns : ' + mostVowels('why dry my sly lynx?'));