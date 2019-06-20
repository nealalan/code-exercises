var myPush = require('./my-push');
describe('myPush', function() {
  it('is a function', function() {
    expect(typeof myPush).toBe('function');
  });

  it('returns an array', function() {
    expect(Array.isArray(myPush([], 5))).toBe(true);
  });

  it('accepts an array and an additional argument and adds the argument to the end of the array', function() {
    expect(myPush([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    expect(myPush(['hello'], 'world')).toEqual(['hello', 'world']);
    expect(myPush(['almonds', 'peanuts'], 22)).toEqual([
      'almonds',
      'peanuts',
      22,
    ]);
  });
});
