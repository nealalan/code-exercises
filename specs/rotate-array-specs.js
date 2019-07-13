var rotate = require('./rotate-array');
describe('rotate', function() {
  it('is a function', function() {
    expect(typeof rotate).toBe('function');
  });

  it('returns an array', function() {
    expect(Array.isArray(rotate([], 0))).toBe(true);
  });

  it('shifts all the values in the array', function() {
    expect(rotate([22, 11, 500, 92], 2)).toEqual([500, 92, 22, 11]);
    expect(rotate([11, 15, 28, 9, 10], 0)).toEqual([11, 15, 28, 9, 10]);
    expect(rotate([7, 8, 9, 10, 11], 5)).toEqual([7, 8, 9, 10, 11]);
  });
});
