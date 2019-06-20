// note: you need define the parameters in the function if needed

function totalPortfolioValue(ticker, portfolio) {
    let value = 0;

    for (let i = 0; i < portfolio.length; i++) {
        let currentTickerPrice = ticker[(ticker.indexOf(portfolio[i][0]) +1)];
        let currentTickerCount = portfolio[i][1];
        value += currentTickerCount * currentTickerPrice;
    }

    return value;
}

module.exports = totalPortfolioValue;
/*
console.log(totalPortfolioValue(['ABC', 10, 'XYZ', 200, 'BBB', 5], [['XYZ', 20], ['BBB', 10]]), 4050);
console.log(totalPortfolioValue(['ABC', 10], [['ABC', 300]]), 3000);
*/