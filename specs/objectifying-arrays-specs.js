var objectifier = require('./objectifying-arrays');
describe('objectifier', function() {
  it('is a function', function() {
    expect(typeof objectifier).toBe('function');
  });

  it('returns an object', function() {
    expect(typeof objectifier([])).toBe('object');
  });

  it('structures an object with nested properties and values based on the array argument', function() {
    // phones: property of initial object {phones:{}}
    // iphone and nexus: properties on the object assigned t othe phones property {phones: {iphone: [], nexus: []}}

    var data = [
      ['phones', ['iphone', ['5', '5s', '6'], 'nexus', ['5', '6', '6p']]],
    ];

    expect(objectifier(data)).toEqual({
      phones: {
        iphone: ['5', '5s', '6'],
        nexus: ['5', '6', '6p'],
      },
    });
  });

  it('structures an object with multiple nested arrays', function() {
    var data = [
      [
        'animals',
        [
          'dogs',
          ['Corgi', 'Sheltie'],
          'cats',
          ['Tabby', 'Black'],
          'pigs',
          ['Teacup'],
        ],
      ],
      [
        'guitars',
        [
          'Fender',
          ['Telecaster', 'Stratocaster', 'Jazzmaster'],
          'Gibson',
          ['Gibson Flying-V', 'Firebird', 'Les Paul'],
        ],
      ],
    ];

    expect(objectifier(data)).toEqual({
      animals: {
        dogs: ['Corgi', 'Sheltie'],
        cats: ['Tabby', 'Black'],
        pigs: ['Teacup'],
      },
      guitars: {
        Fender: ['Telecaster', 'Stratocaster', 'Jazzmaster'],
        Gibson: ['Gibson Flying-V', 'Firebird', 'Les Paul'],
      },
    });
  });
});
