var changeKeys = require('./change-keys');
describe('changeKeys', function() {
  it('is a function', function() {
    expect(typeof changeKeys).toBe('function');
  });

  it('returns an array', function() {
    expect(Array.isArray(changeKeys([]))).toBe(true);
  });

  it('it accepts an array of notes, and transposes their steps by the second argument value', function() {
    expect(changeKeys(['E', 'F'], 1)).toEqual(['F', 'F#']);
    expect(changeKeys(['G'], 5)).toEqual(['C']);
    expect(changeKeys(['A', 'B'], 0)).toEqual(['A', 'B']);
    expect(changeKeys(['A', 'C', 'E'], 2)).toEqual(['B', 'D', 'F#']);
  });
});
