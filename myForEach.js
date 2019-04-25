/*
My For Each
Write a function myForEach that accepts an array and a callback 
function. The behavior of myForEach should mirror the functionality 
of the native .forEach() array method as closely as possible
*/

let myForEach = (array, callbackFunction) => {
    for (let i = 0; i < array.length; i++) {
        callbackFunction(array[i], i, array);
        // I totally don't get what the index and array are being passed
        //   to since the callbackFunction here is addToSum(num) 
        //   what is happening to the i and array????
    }
}


// TEST CONDITIONS
let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6