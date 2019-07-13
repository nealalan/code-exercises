var properNounFilter = require('./proper-noun-filter');
describe('properNounFilter', function() {
  it('is a function', function() {
    expect(typeof properNounFilter).toBe('function');
  });

  it('returns a boolean', function() {
    expect(typeof properNounFilter('example')).toBe('boolean');
  });

  it('returns false if the first character is not capitalized', function() {
    expect(properNounFilter('coffee')).toBe(false);
    expect(properNounFilter('cOFFEE')).toBe(false);
    expect(properNounFilter('skateBoard')).toBe(false);
  });

  it('returns true if the first character is the only captialized character', function() {
    expect(properNounFilter('Coffee')).toBe(true);
    expect(properNounFilter('Bike')).toBe(true);
    expect(properNounFilter('Hospital')).toBe(true);
  });
});
