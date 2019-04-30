/*
Call Count
Write a function, callCount, that returns a new function. The new function 
should return the number of times its been called.
*/

// https://www.youtube.com/watch?v=7VClR5gONKo

function callCount () {
    let count = 0;
    return () => ++count;
}


// TEST CONDITIONS
let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1()); // => 1
console.log(newFunction1()); // => 2

console.log(newFunction2()); // => 1
console.log(newFunction2()); // => 2