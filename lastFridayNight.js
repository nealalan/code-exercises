/*
Last Friday Night
According to the song, Katy Perry "maxed our credit cards".

Define a function, lastFridayNight, takes an array of transactions.

lastFridayNight should return the total amount she spent last Friday night.

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
]
*/

const lastFridayNight = (inputArray) => {
    let totalAmount = 0;
    for (let i = 0; i < inputArray.length; i++) {
        totalAmount += inputArray[i].amount;
    }
    return totalAmount;
}

console.log(`answer 17: ` + lastFridayNight([
    {
      name: 'apples',
      amount: 5
    }, {
      name: 'kleenex',
      amount: 2
    }, {
      name: 'knitting supplies',
      amount: 10,
    }
  ]));
