describe('presses', function() {
  it('is a function', function() {
    expect(typeof presses).toBe('function');
  });

  it('returns the amount of presses for a single character', function() {
    expect(presses('z')).toBe(4);
  });

  it('returns the amount of presses for a single word', function() {
    /* NOTE: treat capital and lower case characters the same (same value) */
    expect(presses('HeLlO')).toBe(13);
  });

  it('returns the amount of presses for a phrase', function() {
    expect(presses('I am traveling to Chicago and staying on 1st street')).toBe(96);
  });
});
