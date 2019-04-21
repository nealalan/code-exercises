/*

My Reverse: Define a function myReverse 
- that accepts an array.
- myReverse should return a new array with the elements in reverse order.
        - myReverse([1, 2, 3]);    // => [3, 2, 1]
- Do not use the built-in .reverse method for this problem. 
You can use it on all future problems though!
*/
// YOUR CODE BELOW

const myReverse = (inputArray = []) => {
    let outputArray = [];
    for (let i = inputArray.length-1; i>=0; i--) outputArray.push(inputArray[i]);
    return outputArray;
}

console.log("3rd,2nd,1st: " + myReverse(['first', 'second', 'third']));
console.log(" : " + myReverse());
console.log("0: " + myReverse([0]));


/*
describe('myReverse', () => {

  it('is a function', () => {
    expect(typeof myReverse).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = myReverse([1, 1]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array with reversed elements', () => {
    let returnedValue = myReverse(['first', 'second', 'third']);
    expect(returnedValue).toEqual(['third', 'second', 'first']);
  });

});
*/