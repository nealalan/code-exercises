/*
Incremental Change: Define a function incrementalChange that 
 - accepts a number and 
 - increments the global variable counter by that amount. 
 - The function should also return the current value of the counter after the increment operation.

Each successive call to incrementalChange should progressively change the value held by the counter.

let counter = 0;

incrementalChange(2); // => 2
incrementalChange(6); // => 8
incrementalChange(-1); // => 7
*/
let counter = 0;
// YOUR CODE BELOW

const incrementalChange = (input) => counter += input;

console.log("10: " + incrementalChange(10));
counter = 0;
console.log("20: " + incrementalChange(20));
counter = 0;
incrementalChange(100);
console.log(" 100 - 50: " + incrementalChange(-50));
