/*
Is Truthy: Write a function isTruthy that accepts a single argument of any type.

isTruthy should return true if that argument is 'truthy'.

If the value is 'falsey', log out one of the messages below, corresponding to the type of the value tested.

'The boolean value false is falsey'
'The null value is falsey'
'undefined is falsey'
'The number 0 is falsey (the only falsey number)'
'The empty string is falsey (the only falsey string)'
isTruthy('I yearn for truth'); // => true
isTruthy(null); // => The null value is falsey
*/
// YOUR CODE BELOW


const isTruthy = (input) => {
  console.log(typeof input);
  if (input === null) return 'The null value is falsey';
  if (input === undefined) return 'undefined is falsey';
  if (typeof input === "string") {
    if (input === '') return 'The empty string is falsey (the only falsey string)';
    else return true;
  }
  if (typeof input === "boolean") {
    if (input === false) return 'The boolean value false is falsey';
    else return true;
  }
  if (typeof input === "number") {
    if (input === 0) return 'The number 0 is falsey (the only falsey number)';
    else return true;
  }

}


describe('isTruthy', () => {

  it('is a function', () => {
    expect(typeof isTruthy).toEqual('function');
  });

  it('returns true if given the boolean true', () => {
    let returnedValue = isTruthy(true);
    expect(returnedValue).toEqual(true);
  });

  it('returns true if given a truthy number', () => {
    let returnedValue = isTruthy(1);
    expect(returnedValue).toEqual(true);
  });

  it('returns true if given a truthy string', () => {
    let returnedValue = isTruthy('Honesty is the best policy');
    expect(returnedValue).toEqual(true);
  });

  it('returns the expected string if given the boolean false', () => {
    let returnedValue = isTruthy(false);
    expect(returnedValue).toEqual('The boolean value false is falsey');
  });

  it('returns the expected string if given null', () => {
    let returnedValue = isTruthy(null);
    expect(returnedValue).toEqual('The null value is falsey');
  });

  it('returns the expected string if given undefined', () => {
    let returnedValue = isTruthy();
    expect(returnedValue).toEqual('undefined is falsey');
  });

  it('returns the expected string if given the number 0', () => {
    let returnedValue = isTruthy(0);
    expect(returnedValue).toEqual('The number 0 is falsey (the only falsey number)');
  });

  it('returns the expected string if given an empty string', () => {
    let returnedValue = isTruthy('');
    expect(returnedValue).toEqual('The empty string is falsey (the only falsey string)');
  });

});
