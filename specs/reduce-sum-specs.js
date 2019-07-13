var sumReduce = require('./reduce-sum');
describe('sumReduce', function() {
  beforeEach(function() {
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  it('is a function', function() {
    expect(typeof sumReduce).toBe('function');
  });

  it('call the Array.prototype.reduce method', function() {
    sumReduce([1, 2, 3, 4]);
    expect(Array.prototype.reduce.calls.any()).toEqual(true);
  });

  it('the starting value is 50', function() {
    expect(sumReduce([])).toEqual(50);
  });

  it('sums the value of the array and adds it to the starting value (50)', function() {
    expect(sumReduce([1, 2, 3, 4])).toEqual(60);
  });
});
