/*
My Last Index Of: Define a function, myLastIndexOf, that accepts up to three arguments:
- array
- searchValue
- startIdx (optional)
- myLastIndexOf should return the last index at which the searchValue appears in the array.
        - myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
- If the searchValue isn't in the array, myLastIndexOf should return -1.
        - myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
- If startIdx is defined, myLastIndexOf should start looking for the seachValue at that index, 
and then move toward the front of the array as it looks for the value.
        - myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
- You cannot use the built-in .lastIndexOf method for this problem, but feel free to use it 
in the future! Note that strings also have a .lastIndexOf method.
*/

// YOUR CODE BELOW
const myLastIndexOf = (inputArray, searchValue, startIdx = inputArray.length) => {
    for (let i = startIdx; i >= 0 ; i--) if (inputArray[i] === searchValue) return i;
    return -1;
}


console.log("3: " + myLastIndexOf([0, 10, 20, 10, 0], 10));
console.log("-1: " + myLastIndexOf(['peanut', 'cashew', 'walnut'], 'lemon'));
console.log("1: " + myLastIndexOf([0, 10, 20, 10, 0], 10, 2));


/*
describe('myLastIndexOf', () => {

  it('is a function', () => {
    expect(typeof myLastIndexOf).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = myLastIndexOf([1, 2, 3], 2);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the last index at which the searchValue appears in the array', () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10);
    expect(returnedValue).toEqual(3);
  });

  it('returns -1 if the searchValue does not exist in the array', () => {
    let returnedValue = myLastIndexOf(['peanut', 'cashew', 'walnut'], 'lemon');
    expect(returnedValue).toEqual(-1);
  });

  it('returns the last index of the searchValue that is less than the startIdx', () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10, 2);
    expect(returnedValue).toEqual(1);
  });

});
*/