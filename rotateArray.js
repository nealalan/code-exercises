/*
Rotate Array: Define a function, rotateArray, that accepts two arguments:
originalArray (array)
rotateNum (number)

If the rotateNum is positive, rotate should return a copy of the original array 
rotated to the right by the rotateNum of indices.
    rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
If the rotateNum is negative, rotate should return a copy of the original array 
rotated to the left by the rotateNum of indices.
    rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
If the rotateNum is 0, rotate should return a copy of the original array without 
rotating it.
    rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
You can assume the absolute value of rotateNum will be less than the length of the 
original array.
*/

const rotateArray = (originalArray, rotateNum = 0) => {
    let outputArray = originalArray.slice();

    if (rotateNum === 0) return originalArray;

    if (rotateNum > 0) {
        for (let i = 0; i < rotateNum; i++) {
            // return the first item removed from the array & push to end of array
            outputArray.push(outputArray.shift());
        }
    }
    else {
        for (let i = 0; i < rotateNum * -1; i++) {
            // return the last item removed from the array & add to the beginning
            outputArray.unshift(outputArray.pop());
        }
    }
    return outputArray;
}


console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], -1));
console.log(rotateArray([1, 2, 3, 4, 5], 0));
console.log(rotateArray(['first', 'second', 'third', 'fourth'], -3));