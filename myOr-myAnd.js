/*
My Or, My And: Define a function, myOr, that accepts three arguments of any type.

myOr should return the same result as the buit-in || operator:
myOr(true, true, false) === (true || true || false); // => true

Then, define a function, myAnd, that accepts three arguments of any type.
myAnd should return the same result as the buit-in && operator:
myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
*/
// YOUR CODE BELOW

 const myOr = (a, b, c) => a || b || c;
 const myAnd = (a, b, c) => a && b && c;
/*
const myOr = (a, b, c) => {
  if (a) return a;
  if (b) return b;
  return c;
}
const myAnd = (a, b, c) => {
  if (!a) return a;
  if (!b) return b;
  return c;
}
*/
console.log("myOr func: " + typeof myOr);
console.log("apples: " + myOr('apples', 1, false));
console.log("i am truthy: " + myOr(null, 'i am truthy', 'also true'))
console.log("true: " + myOr(false, false, true));
console.log("null: " + myOr('', 0, null));
console.log("myAnd func: " + typeof myAnd);
console.log("false: " + myAnd('apples', 1, false));
console.log("null string: " + myAnd(20, '', 'i am truthy'));
console.log("0: " + myAnd(true, 'happy', 0));
console.log("yay!: " + myAnd('finally', 'we did it!', 'yay!'));
