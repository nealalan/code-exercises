var palindrome = require('./palindrome');
describe('palindrome', function() {
  it('palindrome is a function', function() {
    expect(typeof palindrome).toEqual('function');
  });

  it('palindrome returns a boolean value', function() {
    expect(typeof palindrome('codepen')).toEqual('boolean');
  });

  it('returns true if the argument is a palindrome', function() {
    expect(palindrome('racecar')).toEqual(true);
    expect(palindrome('madam')).toEqual(true);
  });

  it('returns false if the argument is not a palindrome', function() {
    expect(palindrome('Mark Davis')).toEqual(false);
    expect(palindrome('space jam')).toEqual(false);
  });

  it('does not use Array.prototype.reverse', function() {
    spyOn(Array.prototype, 'reverse').and.callThrough();

    palindrome('Hello World');

    expect(Array.prototype.reverse.calls.any()).toEqual(false);
  });
});
