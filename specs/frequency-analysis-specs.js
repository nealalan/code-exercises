var frequencyAnalysis = require('./frequencey-analysis');
describe('frequencyAnalysis', function() {
  it('is a function', function() {
    expect(typeof frequencyAnalysis).toBe('function');
  });

  it('returns an object', function() {
    expect(typeof frequencyAnalysis('abcd')).toBe('object');
  });

  it('determines the frequency of each character in the string', function() {
    var str = 'abdcaadezfgzbez';

    expect(frequencyAnalysis(str)).toEqual({
      a: 3,
      b: 2,
      c: 1,
      d: 2,
      e: 2,
      f: 1,
      g: 1,
      z: 3,
    });
  });
});
