let functionRunner = require('./function-runner');
describe('functionRunner', function() {
  it('invokes the function passed as an argument and returns its return value', function() {
    function add(a) {
      return a + a;
    }

    function squareNum(x) {
      return x * x;
    }

    function multiplyByTwo(num) {
      return num * 2;
    }
    expect(functionRunner(add, 5)).toEqual(10);
    expect(functionRunner(squareNum, 9)).toEqual(81);
    expect(functionRunner(multiplyByTwo, 7)).toEqual(14);
  });
});
