describe('highestScore', function() {
  it('is a function', function() {
    expect(typeof highestScore).toBe('function');
  });

  it('returns the word and the score with the highest "score" based on each characters position in the alphabet in order (A=1 point, Z=26 point', function() {
    expect(highestScore('SQL')).toEqual('sql');
    expect(highestScore('a z')).toEqual('z');
    expect(highestScore('What is the highest scored word?')).toEqual('highest');
  });

  it("returns an empty string if there isn't a word with points", function() {
    expect(highestScore('!@#$%^&')).toEqual('');
  });
});
