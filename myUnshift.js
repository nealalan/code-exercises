/*
My Unshift: Write a function myUnshift that 
- takes an array and 
- a value of any type as arguments.
- myUnshift should return a new array, with the given value as the first element in the new array.
    - myUnshift([1, 2, 3], 0); / => [0, 1, 2, 3];
- Do not use the built-in .shift method for this problem!
*/
// YOUR CODE BELOW

const myUnshift = (inputArray = [], inputItem = null) => {
    let outputArray = [];
    outputArray.push(inputItem);
    for (let i = 0; i < inputArray.length; i++) outputArray.push(inputArray[i]);
    return outputArray;
}

console.log(myUnshift([1, 2, 3], 0));
console.log(myUnshift(['bears', 'cows', 'ducks'], 'antelopes'), )
console.log(myUnshift(['bears', 'cows', 'ducks']));
console.log(myUnshift());

/*
describe('myUnshift', () => {

  it('is a function', () => {
    expect(typeof myUnshift).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = myUnshift([1, 2, 3], 0);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a new array with the value as the first index', () => {
    let returnedValue = myUnshift(['bears', 'cows', 'ducks'], 'antelopes');
    expect(returnedValue).toEqual(['antelopes', 'bears', 'cows', 'ducks']);
  });

});

*/