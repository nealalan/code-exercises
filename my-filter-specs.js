var myFilter = require('./my-filter');
describe('the function myFilter', function() {
  beforeEach(function() {
    spyOn(Array.prototype, 'filter').and.callThrough();
  });

  // `evenFilter` returns true if a number is even
  var evenFilter = function(element) {
    if (element % 2 === 0) return true;
    else return false;
  };

  // `oddFilter` returns true if a number is odd
  var oddFilter = function(element) {
    return !evenFilter(element);
  };

  it('is a function', function() {
    expect(typeof myFilter).toBe('function');
  });

  it('filters an array based on evens', function() {
    expect(myFilter([1, 2, 3, 4, 5, 6, 7, 8], evenFilter)).toEqual([
      2,
      4,
      6,
      8,
    ]);
  });

  it('filters an array based on odds', function() {
    expect(myFilter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter)).toEqual([1, 3, 5, 7]);
  });

  it('should not use Array.prototype.filter', function() {
    myFilter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter);
    expect(Array.prototype.filter.calls.any()).toEqual(false);
  });
});
