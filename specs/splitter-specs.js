var splitter = require('./splitter');
describe('splitter', function() {
  it('is a function', function() {
    expect(typeof splitter).toBe('function');
  });

  it('returns an array', function() {
    expect(Array.isArray(splitter('testing'))).toBe(true);
  });

  it('creates a pair of characters in a string and adds each pair to an array', function() {
    var even = 'even';
    var pair = 'pair';
    var homeRun = 'Home Run';

    expect(splitter(even)).toEqual(['ev', 'en']);
    expect(splitter(pair)).toEqual(['pa', 'ir']);
    expect(splitter(homeRun)).toEqual(['Ho', 'me', ' R', 'un']);
  });

  it('adds an "_" if there are not enough characters for a pair', function() {
    var odd = 'odd';
    var testing = 'testing';

    expect(splitter(odd)).toEqual(['od', 'd_']);
    expect(splitter(testing)).toEqual(['te', 'st', 'in', 'g_']);
  });
});
