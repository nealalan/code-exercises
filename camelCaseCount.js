/*
 2019-05-28

 Problem: https://www.hackerrank.com/challenges/camelcase/problem

Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , print the number of words in  on a new line.

For example, . There are  words in the string.

*/

'use strict';

// Complete the camelcase function below.
function camelcase(s) {
    // always at least 1 word input
    let count = 1;
    // already counted first word, so skip first letter
    for (let i = 1; i < s.length; i++) {
        s[i] === s[i].toUpperCase() ? count++ : null;
    }
    return count;
}

// TEST CONDITIONS
console.log('dog', camelcase('dog'));
console.log('dogFoodIsForADog', camelcase('dogFoodIsForADog'))
console.log('ABCDE', camelcase('ABCDE'));
