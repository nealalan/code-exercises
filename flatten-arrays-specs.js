var flatten = require('./flatten-arrays');
describe('flatten', function() {
  it('returns an array', function() {
    expect(Array.isArray(flatten([]))).toBe(true);
  });

  it('returns a one-dimensional array', function() {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('flattens a nested (two-dimensional) array and returns a one-dimensional copy', function() {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(flatten([['hello', 'world']])).toEqual(['hello', 'world']);
    expect(flatten([1, [2, 3], 4, [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
