describe('sort', function() {
  it('- should sort a simple integer list', function() {
    var unsorted = [17, 43, 216, 3, 9, 27],
      sorted = sort(unsorted);

    expect(sorted).toEqual([3, 9, 17, 27, 43, 216]);
    expect(sorted.length).toEqual(6);
  });

  it('- should sort positive and negative integers', function() {
    var unsorted = [17, -43, 216, 3, -9, 27],
      sorted = sort(unsorted);

    expect(sorted).toEqual([-43, -9, 3, 17, 27, 216]);
    expect(sorted.length).toEqual(6);
  });

  it('- should clumsily sort strings', function() {
    var unsorted = ['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel'],
      sorted = sort(unsorted);

    expect(sorted).toEqual(['aardvark', 'pretzel', 'prune', 'toad', 'tuna', 'weasel']);
    expect(sorted.length).toEqual(6);
  });

  it('does not use built-in sorting methods', function() {
    spyOn(Array.prototype, 'sort').and.callThrough();

    var unsorted = [107, -443, 216, 300, -9, 247],
      sorted = sort(unsorted);

    expect(sorted).toEqual([-443, -9, 107, 216, 247, 300]);
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });
});
