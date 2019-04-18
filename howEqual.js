/*
How Equal: Define a function, howEqual, that accepts two arguments of any type.

howEqual should return the string 'loosely' if the two values passed into the function are loosely equal. howEqual should return 'strictly' if the two values are strictly equal. howEqual should return the string 'not equal' if the two values are neither strictly nor loosely equal.

howEqual(0, '0'); // => loosely
howEqual(3, 9/3); // => strictly
howEqual(true, 'truthy') // => not equal
*/
// YOUR CODE BELOW
let howEqual = (a, b) => {
  // if values are loosely equal and NOT strictly equal
  if ((a == b) && !(a === b)) return 'loosely';
  // if values are strictly equal (they will be loosely equal also)
  else if (a === b) return "strictly";
  // if not equal at all
  else return "not equal";
}
