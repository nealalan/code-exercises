/*
Only One: Write a function onlyOne that accepts three arguments of any type.

onlyOne should return true only if exactly one of the three arguments are truthy. Otherwise, it should return false.

Do not use the equality operators (== and ===) in your solution.

onlyOne(false, false, true); // => true
onlyOne(0, 1, 2) // => false
*/
// YOUR CODE BELOW
const onlyOne = (a, b, c) => (((!a && !b) && c) || ((!a && !c) && b) || ((!b && !c) && a)) ? true : false;

// SIDE NOTE: Article on Double Negation https://www.sitepoint.com/javascript-double-negation-trick-trouble/


console.log("function: " + typeof onlyOne);
console.log("boolean: " + typeof onlyOne(1, 1, 1));
console.log("true: " + onlyOne(1, 0, false));
console.log("true: " + onlyOne(null, 'hi!', undefined));
console.log("true: " + onlyOne(0, '', true));
console.log("false: " + onlyOne(false, null, undefined));
console.log("false: " + onlyOne('', -20, true));
console.log("false: " + onlyOne(true, null, 'i am truthy'));
console.log("false: " + onlyOne(true, 'pumpkin', 0));
console.log("false: " + onlyOne(true, 'yes!', 100));
