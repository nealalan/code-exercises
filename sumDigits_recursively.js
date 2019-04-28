/*
Sum Digits
Write a function, sumDigits, that sums all the digits of a given 
integer (assume positive). Use recursion.
*/

let sumDigits = (input) => {
    // create a string verse so the num can be broken into pieces
    let inputStr = input.toString();

    if (inputStr.length === 1) return parseInt(inputStr);

    let currentNum = parseInt(inputStr[0]);
    let newInput = sumDigits(Number(inputStr.slice(1)));
    
    return currentNum + newInput;
    // not sure why parseInt won't work here...
}

console.log(sumDigits(1239999)); // => 10