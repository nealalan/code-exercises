/*
Define a function greeting that accepts an optional string argument called name. greeting should return a personalized string if the name is present.

greeting('Sadie'); // => Hello Sadie!
greeting(); // => Hello!
*/
// YOUR CODE BELOW

// return is based on if variable x exists
//  if true, first condition
//  if false, second condition
const greeting = (x) => { return x ? "Hello " + x + "!" : "Hello!" }

// the most reduced code:
const greeting2 = x => x ? `Hello ${x}!` : `Hello!`;
