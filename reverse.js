/*
Reverse Array
Write a function that accepts an array and reverses that array in place. 
The behavior should mimic the behavior of the native .reverse() array method. 
However, your reverse function should accept the array to operate on as an 
argument, rather than being invoked as a method on that array.

Do not use the native .reverse() method in your own implementation.
*/

const reverseArray = (inputArray) => {
    let backwardsArray = [];

    // pop the end off and push them onto an array
    for (let i = 0; i < inputArray.length + backwardsArray.length; i++) 
        backwardsArray.push(inputArray.pop());
    
    // sequentually move the backwardsAwway to the inputArray
    for (let i = 0; i < inputArray.length + backwardsArray.length; i++) 
        inputArray.unshift(backwardsArray.pop());
        
    return inputArray;
}


// TEST CONDITIONS
let myArray = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(myArray));
console.log(myArray)