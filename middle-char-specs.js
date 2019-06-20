var getMid = require('./middle-char');
describe('getMid', function() {
  it('is a function', function() {
    expect(typeof getMid).toBe('function');
  });

  it('returns a string', function() {
    expect(typeof getMid('hello')).toBe('string');
  });

  it('returns a single middle character when the string has an odd number of characters', function() {
    var fasting = 'fasting';
    var c = 'c';
    var eclipse = 'eclipse';

    expect(getMid(fasting)).toEqual('t');
    expect(getMid(c)).toEqual('c');
    expect(getMid(eclipse)).toEqual('i');
  });

  it('returns the two "middle" characters when the string has an even number of characters', function() {
    var variable = 'variable';
    var javascript = 'JavaScript';
    var server = 'server';

    expect(getMid(variable)).toEqual('ia');
    expect(getMid(javascript)).toEqual('Sc');
    expect(getMid(server)).toEqual('rv');
  });
});
