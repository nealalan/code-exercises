var evenOdd = require('./even-odd');
describe('evenOdd', function() {
  it('is a function', function() {
    expect(typeof evenOdd).toEqual('function');
  });

  it('accepts an array and returns an array', function() {
    expect(Array.isArray(evenOdd([]))).toBe(true);
  });

  it('returns an multi-dimensional array with two nested arrays', function() {
    expect(evenOdd([])).toEqual([[], []]);
  });

  it('places even numbers from the argument array into the first nested array', function() {
    expect(evenOdd([2, 4, 6, 8])).toEqual([[2, 4, 6, 8], []]);
    expect(evenOdd([10, 20, 30, 40, 44])).toEqual([[10, 20, 30, 40, 44], []]);
  });

  it('places odd number from the argument array into the second nested array', function() {
    expect(evenOdd([1, 3, 5, 7, 9])).toEqual([[], [1, 3, 5, 7, 9]]);
    expect(evenOdd([11, 33, 55, 77, 99])).toEqual([[], [11, 33, 55, 77, 99]]);
  });

  it('separates even and odd numbers and places the them in the proper nested array', function() {
    expect(evenOdd([1, 2, 3, 4, 5, 6])).toEqual([[2, 4, 6], [1, 3, 5]]);
    expect(evenOdd([12, 12, 33, 45, 59, 61])).toEqual([
      [12, 12],
      [33, 45, 59, 61],
    ]);
  });
});
