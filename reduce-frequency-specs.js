var strFrequency = require('./reduce-frequency');
describe('strFrequency', function() {
  beforeEach(function() {
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  it('is a function', function() {
    expect(typeof strFrequency).toBe('function');
  });

  it('returns an object', function() {
    expect(typeof strFrequency(['Bob'])).toBe('object');
  });

  it('uses Array.prototype.reduce', function() {
    strFrequency(['Nimit']);
    expect(Array.prototype.reduce.calls.any()).toEqual(true);
  });

  it("takes an array of strings and determines each string's frequency", function() {
    var names = [
      'Scott',
      'Cooper',
      'Omri',
      'Gabriel',
      'Ashi',
      'Emilie',
      'Cang',
      'Kate',
      'Gabriel',
      'Gabriel',
      'Kate',
      'Emilie',
      'Kate',
      'Gabriel',
      'Cooper',
    ];

    expect(strFrequency(names)).toEqual({
      Scott: 1,
      Cooper: 2,
      Omri: 1,
      Gabriel: 4,
      Ashi: 1,
      Emilie: 2,
      Kate: 3,
      Cang: 1,
    });
  });
});
