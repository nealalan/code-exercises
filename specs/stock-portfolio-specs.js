var totalPortfolioValue = require('./stock-portfolio');
describe('totalPortfolioValue', function() {
  it('is a function', function() {
    expect(typeof totalPortfolioValue).toBe('function');
  });
  it('returns a number', function() {
    var ticker = ['ABC', 10];
    var portfolio = [['ABC', 200]];
    expect(typeof totalPortfolioValue(ticker, portfolio)).toBe('number');
  });

  it('calculates the total value of a portfolio based on the ticker (first argument) and portfolio (second argument)', function() {
    var ticker = ['ABC', 10];
    var portfolio = [['ABC', 300]];
    expect(totalPortfolioValue(ticker, portfolio)).toEqual(3000);
  });

  it('calculates a large portfolio', function() {
    var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
    var portfolio = [['XYZ', 20], ['BBB', 10]];

    expect(totalPortfolioValue(ticker, portfolio)).toEqual(4050);
  });
});
