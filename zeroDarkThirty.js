/*
Zero Dark Thirty
Write a function zeroDarkThirty that accepts a number as an arguemnt.

zeroDarkThirty should return a number with all of the zeroes removed:

zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
If the number 0 is passed in as the argument, return NaN.

zeroDarkThirty(0) // => NaN
*/
// YOUR CODE BELOW
const zeroDarkThirty = (inputNumber) =>
  (!inputNumber || inputNumber === 0) ? NaN : parseFloat(inputNumber.toString().split('0').join(''));
  // alledegly not as efficient to typecast
  //(!inputNumber || inputNumber === 0) ? NaN : Number(String(inputNumber).split('0').join(''));

// CONSOLE LOG TESTING
console.log("function:              " + typeof zeroDarkThirty);
console.log("number:                " + typeof zeroDarkThirty(0));
console.log("0 => NaN:              " + zeroDarkThirty(0));
console.log("101 => 11:             " + zeroDarkThirty(101));
console.log("10000000000 => 1:      " + zeroDarkThirty(10000000000));
console.log("000070900.006 => 79.6: " + zeroDarkThirty(000070900.006));
//console.log(typeof NaN === "number"); // huh.
