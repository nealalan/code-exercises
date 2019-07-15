/* eslint-disable no-unused-vars */
/*
### Vowel Count
Create a function called `vowelsCount(str)` that detects the amount of vowels 
in a string and **returns an object with the format:
    ** `{a: 0, e: 0, i: 0, o: 0, u: 0, total: 0}`. 
The object returned contains property/value pairs that correspond to the vowel 
(property) and the amount of occurrences of the vowel in the `str` argument. In 
addition, it has a property called `total` that contains the sum of all of the 
vowels included in the `str` argument.

**Note: `y` is not considered a vowel for this exercise.**
**Note:** `Array.prototype.reduce` should be used in your solution

For Example:
// INPUT: 'David Yang'
vowelsCount('David Yang');
// OUTPUT: {a: 2, e: 0, i: 1, o: 0, u: 0, total: 3}

// INPUT: 'Nimit Maru'
vowelsCount('Nimit Maru');
// OUTPUT: {a: 1, e: 0, i: 2, o: 0, u: 1, total: 4}
*/

const vowelsCount = (input = '') => {
    const inputLower = input.toLowerCase();
    const inputArray = inputLower.split('');

    let vowelObject = { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 };
    if (!inputArray.length) return vowelObject;

    inputArray.reduce((acc, item) => {
        console.log(item);
        if (vowelObject[item] !== undefined) {
            vowelObject[item]++;
            vowelObject['total']++;
        }
    }, '');
    console.log(JSON.stringify(vowelObject),'\n');
    return vowelObject;
}

// console.log(vowelsCount('David Yang'));
// console.log(vowelsCount('Nimit Maru'));
