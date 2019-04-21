/*
My Includes: Define a function, myIncludes, that 
- accepts an array and a searchValue.
- myIncludes should return true if the searchValue is an element in the array. 
- Otherwise, myIncludes should return false.
Constraints: 
Do not use the built-in .includes array method during this problem. 
Feel free to use it on any future problem though! Note that strings have an .includes method, too.

myIncludes([10, 20, 30], 20); // => true
myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
*/

const myIncludes = (inputArray, searchValue) => {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === searchValue) return true;
    }
    return false;
}

console.log("true: " + myIncludes(['ruby', 'go', 'javascript'], 'javascript'));
console.log("false: " + myIncludes(['fun', 'happy things', 'kittens'], 'sad things'));
console.log("false: " + myIncludes([5, 10, 15], '10'));
