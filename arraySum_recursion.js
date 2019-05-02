/*
Array Sum
Write a function, arraySum, that accepts an array of numbers and 
returns the sum of all the numbers in the array (no matter how nested!).
*/

function arraySum (input) {
    let outputSum = 0;

    for (let i = 0; i < input.length; i++) {
        console.log(typeof input[i], input[i]);
        if (typeof input[i] === 'number') outputSum += input[i];
        else if (Array.isArray(input[i])) outputSum += arraySum(input[i]);

    }
    return outputSum;
}


// TEST CONDITIONS
console.log(arraySum([1, [2, 3, [4]]])); // => 10
