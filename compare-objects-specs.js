var compareObjects = require('./compare-objects');
describe('compareObjects', function() {
  it('is a function', function() {
    expect(typeof compareObjects).toBe('function');
  });

  it('returns a boolean', function() {
    expect(typeof compareObjects({}, {})).toBe('boolean');
  });

  it('returns false if both objects do not match properties and values', function() {
    var obj1 = { hello: 'world' };
    var obj2 = { hello: '404 Not Found' };

    expect(compareObjects(obj1, obj2)).toBe(false);
  });

  it('returns true if both object match properties and values', function() {
    var obj1 = { solar: 'eclipse' };
    var obj2 = { solar: 'eclipse' };

    expect(compareObjects(obj1, obj2)).toBe(true);
  });
});
