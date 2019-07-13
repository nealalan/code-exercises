var mySlice = require('./my-slice');
describe('mySlice', function() {
  it('returns an array', function() {
    expect(Array.isArray(mySlice([]))).toBe(true);
    expect(Array.isArray(mySlice([], 0))).toBe(true);
    expect(Array.isArray(mySlice([], 0, 0))).toBe(true);
  });

  it('the second argument is the "starting" point where extraction begins', function() {
    expect(mySlice([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    expect(mySlice([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    expect(mySlice([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(mySlice([1, 2, 3, 4], 3)).toEqual([4]);
    expect(mySlice([1, 2, 3, 4], 4)).toEqual([]);
  });

  it('if second argument a negative integer the "starting" point starts from end of the array', function() {
    expect(mySlice([1, 2, 3, 4], -1)).toEqual([4]);
    expect(mySlice([1, 2, 3, 4], -2)).toEqual([3, 4]);
    expect(mySlice([1, 2, 3, 4], -3)).toEqual([2, 3, 4]);
    expect(mySlice([1, 2, 3, 4], -4)).toEqual([1, 2, 3, 4]);
  });

  it('the third argument is the "stopping" point and extracts up to, but not including the index', function() {
    expect(mySlice([1, 2, 3, 4], 0, 3)).toEqual([1, 2, 3]);
    expect(mySlice([1, 2, 3, 4], 0, 2)).toEqual([1, 2]);
    expect(mySlice([1, 2, 3, 4], 0, 1)).toEqual([1]);
    expect(mySlice([1, 2, 3, 4], 0, 0)).toEqual([]);
    expect(mySlice([1, 2, 3, 4], 1, 2)).toEqual([2]);
  });

  it('if the third argument is a negative integer, the "stopping" point offsets from the end of the array', function() {
    expect(mySlice([1, 2, 3, 4], 0, -3)).toEqual([1]);
    expect(mySlice([1, 2, 3, 4], 0, -2)).toEqual([1, 2]);
    expect(mySlice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3]);
  });
});
