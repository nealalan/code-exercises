describe('mineFinder', function() {
  it('is a function', function() {
    expect(typeof mineFinder).toBe('function');
  });

  it('returns the location of a mine', function() {
    var mineField = [[0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 1]];

    expect(mineFinder(mineField)).toEqual([2, 4]);
    expect(mineFinder([[0, 0], [0, 0], [0, 1], [0, 0]])).toEqual([2, 1]);
  });
});
