/*
Reverse Array
Write a function, reverseArray, that accepts an array and returns a 
reversed copy of that array. Use recursion.
*/

let reverseArray = (array) => {
    if (array.length === 1) return array.slice();

    let outputArray = [];
    console.log('input going up the chain', array);
    // take the last item in the array and concat to output array
    outputArray.push(array[array.length -1]);
    console.log('output piece', outputArray);

    // remove the last item in the array and pass the remaining
    let temp = outputArray.concat(reverseArray(array.slice(0,-1)));
    console.log('returning back and grabbing pieces', temp);
    return temp;
}

// TEST COND
let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
console.log(arr)    // [1,2,3,4]