var myJoin = require('./my-join');
describe('myJoin', function() {
  it('is a function', function() {
    expect(typeof myJoin).toEqual('function');
  });

  it('accepts an array argument and returns a string', function() {
    expect(myJoin([])).toEqual('');
  });

  it('takes each value from the array and places the values in their same position as a string', function() {
    expect(myJoin([1, 2, 3])).toEqual('1,2,3');
    expect(myJoin(['iced', 'coffee', 2])).toEqual('iced,coffee,2');
  });

  it('separates the values in the string with the second argument (the delimiter', function() {
    expect(myJoin([1, 2, 3], '+')).toEqual('1+2+3');
    expect(myJoin(['iced', 'coffee', 'or', 'iced', 'tea'], '')).toEqual(
      'icedcoffeeoricedtea'
    );
    expect(myJoin([10, 20, 30, 40, 50], ' ')).toEqual('10 20 30 40 50');
  });
});
