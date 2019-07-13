var underToCamel = require('./underscore');
describe('underToCamel', function() {
  it('returns a string value', function() {
    expect(typeof underToCamel('hello_world')).toEqual('string');
  });

  it("doesn't change a plain string", function() {
    expect(underToCamel('netflix')).toEqual('netflix');
    expect(underToCamel('hulu')).toEqual('hulu');
    expect(underToCamel('youtubeTV')).toEqual('youtubeTV');
  });

  it('removes the one underscore and capitalizes the proceeding character of the underscore', function() {
    expect(underToCamel('accident_prone')).toEqual('accidentProne');
    expect(underToCamel('camera_ready')).toEqual('cameraReady');
    expect(underToCamel('quick_thinking')).toEqual('quickThinking');
  });

  it('removes multiple underscores and captilized the next character after each underscore', function() {
    expect(underToCamel('i_am_going_skateboarding')).toEqual(
      'iAmGoingSkateboarding'
    );
    expect(underToCamel('what_are_you_up_to')).toEqual('whatAreYouUpTo');
    expect(underToCamel('intelligent_quick_thinking')).toEqual(
      'intelligentQuickThinking'
    );
  });
});
