describe('autocomplete', function() {
  it('is a function', function() {
    expect(typeof autocomplete).toBe('function');
  });

  it('matches the input string to strings in the dictionary array that have the same pattern', function() {
    var inputString = 's';
    var dictionaryArray = ['zoo', 'apes', 'snake', 'sheep'];

    expect(autocomplete(inputString, dictionaryArray)).toEqual(['snake', 'sheep']);
  });

  it('matches the input string when the input string is more than one character', function() {
    var inputString = 'sh';
    var dictionaryArray = ['shortening', 'shortbread', 'silver', 'shuttle', 'wash', 'vanish', 'english'];

    expect(autocomplete(inputString, dictionaryArray)).toEqual(['shortening', 'shortbread', 'shuttle']);
  });
});
