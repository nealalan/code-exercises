var myMap = require('./my-map');
describe('the function myMap', function() {
  var doubler;
  beforeEach(function() {
    //Here we are making sure that you don't use the built in Array#map method
    spyOn(Array.prototype, 'map').and.callThrough();
    doubler = function(num) {
      return num + num;
    };
  });

  it('is a function', function() {
    expect(typeof myMap).toBe('function');
  });

  it('returns an array', function() {
    expect(Array.isArray(myMap([1, 2], doubler))).toBe(true);
  });

  // Now let's use the `doubler` function and apply it over an
  // entire array using a map function that we will create

  // Observe here how we're not actually iterating here, we're writing a function that handles
  // the looping so we can focus on higher-level code semantics
  it('takes our doubling function and applies it to an array', function() {
    expect(myMap([1, 2, 3], doubler)).toEqual([2, 4, 6]);
  });

  it('takes a tripling function', function() {
    // Here we create an anonymous function that triples and pass it into map
    expect(
      myMap([1, 2, 3], function(elem) {
        return elem * 3;
      })
    ).toEqual([3, 6, 9]);
  });

  it('should not use Array.prototype.map', function() {
    myMap([1, 2, 3], doubler);
    expect(Array.prototype.map.calls.any()).toEqual(false);
  });
});
