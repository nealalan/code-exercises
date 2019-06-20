/*
Write the function myPush which mirrors the behavior of JavaScripts .push() array 
method. myPush should accept the array to operate on as an argument and return the 
new array with the added element. myPush will receive two arguments: the array, 
and a single value to the added to the end of the array.

Do not use the native .push() method in your function!

Example
INPUT: myPush([1, 2, 3], 4);
OUTPUT: [1, 2, 3, 4]
*/

function myPush(inputArray, addItem) {
    inputArray[inputArray.length] = addItem;
    return inputArray;
}

module.exports = myPush;
