var myLastIndexOf = require('./last-indexOf');

describe('myLastIndexOf', function() {
  it('is a function', function() {
    expect(typeof myLastIndexOf).toBe('function');
  });

  it('returns a number', function() {
    expect(typeof myLastIndexOf([1, 2, 1], 1)).toBe('number');
  });

  it('returns the last index the "search value" is found in the array', function() {
    /* Note: the "search value" is the second argument */

    var arrToSearch = [1, 2, 1];
    var searchValue = 1;
    expect(myLastIndexOf(arrToSearch, searchValue)).toEqual(2);
  });

  it('starts the search from the optional third argument "fromIndex", and looks backwards from the index', function() {
    var arrToSearch = [7, 1, 8, 9, 1, 3, 4];
    var searchValue = 1;
    var fromIndex = 3;

    expect(myLastIndexOf(arrToSearch, searchValue, fromIndex)).toEqual(1);
  });

  it('returns negative 1 if the value is not present in the array', function() {
    var arrToSearch = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var searchValue = 'z';

    expect(myLastIndexOf(arrToSearch, searchValue)).toEqual(-1);
    expect(myLastIndexOf(arrToSearch, 'e', 3)).toEqual(-1);
  });
});
