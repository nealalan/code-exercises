var mySplice = require('./my-splice');
describe('mySplice', function() {
  it('is a function', function() {
    expect(typeof mySplice).toBe('function');
  });

  it('returns an array', function() {
    expect(Array.isArray(mySplice([], 0))).toBe(true);
  });

  it('utilizes the "starting point"; removes elements from the starting point to the end of the array and returns an array of the elements removed', function() {
    var arr = [1, 2, 3, 4];

    // removed the elements from the starting point to the end of the array
    expect(mySplice(arr, 1)).toEqual([2, 3, 4]);

    // the original array is manipulated and contains all the values from prior to the starting point.
    expect(arr).toEqual([1]);
  });

  it('the delete count (third argument), deletes indexes from the "starting point"', function() {
    var arr = [1, 2, 3, 4];
    var array = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(mySplice(arr, 0, 2)).toEqual([1, 2]);
    expect(arr).toEqual([3, 4]);

    expect(mySplice(array, 2, 4)).toEqual([3, 4, 5, 6]);
    expect(array).toEqual([1, 2, 7, 8]);
  });
});
