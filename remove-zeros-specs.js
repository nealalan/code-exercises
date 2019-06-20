var removeZeros = require('./remove-zeros');
describe('removeZeros', function() {
  it('is a function', function() {
    expect(typeof removeZeros).toBe('function');
  });

  it('returns a number value', function() {
    expect(typeof removeZeros(22)).toBe('number');
  });

  it('strips all the zeros from a number', function() {
    expect(removeZeros(80975002)).toEqual(89752);
    expect(removeZeros(99000076400201)).toEqual(9976421);
    expect(removeZeros(90210)).toEqual(921);
  });

  it('returns NaN if the argument is already 0', function() {
    expect(removeZeros(0)).toEqual(NaN);
    expect(removeZeros(0000000)).toEqual(NaN);
  });
});
