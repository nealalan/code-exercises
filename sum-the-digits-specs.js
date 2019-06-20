var sumOfDigits = require('./sum-the-digits');
describe('sumOfDigits', function() {
  it('returns a number value', function() {
    expect(typeof sumOfDigits(5)).toEqual('number');
  });

  it('returns zero if an argument is not passed', function() {
    expect(sumOfDigits()).toEqual(0);
  });

  it('sums the digits for a single digit', function() {
    expect(sumOfDigits(5)).toEqual(5);
    expect(sumOfDigits(9)).toEqual(9);
    expect(sumOfDigits(2)).toEqual(2);
  });

  it('sums the digits for two digits', function() {
    expect(sumOfDigits(50)).toEqual(5);
    expect(sumOfDigits(19)).toEqual(10);
    expect(sumOfDigits(38)).toEqual(11);
  });

  it('sums the digits for three digits', function() {
    expect(sumOfDigits(432)).toEqual(9);
    expect(sumOfDigits(891)).toEqual(18);
    expect(sumOfDigits(239)).toEqual(14);
  });

  it('sums the digits for a random amount of digits', function() {
    expect(sumOfDigits(8123468)).toEqual(32);
    expect(sumOfDigits(8123468964762)).toEqual(66);
    expect(sumOfDigits(487612)).toEqual(28);
  });
});
