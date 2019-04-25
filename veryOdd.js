/*
Very Odd
Write a function, veryOdd. The function accepts an array of numbers. It 
should return a new array that contains only the odd numbers from the given
array. veryOdd must not mutate the given array.
*/

const veryOdd = (inputArray) => {
    let outputArray = [];
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] % 2) outputArray.push(inputArray[index]);
    }
    return outputArray;
}

// TEST CONDITIONS
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]