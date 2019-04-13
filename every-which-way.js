/*
Test parms:
everyWhichWay(10, 20, 30); // => sum
everyWhichWay(50, 20, 30); // => difference
everyWhichWay(4, 4, 16); // => product
everyWhichWay(100, 10, 10); // => fraction
everyWhichWay(1, 1000, 50); // => null
*/

// Every Which Way: Write a function everyWhichWay that accepts three number arguments. everyWhichWay should:
const everyWhichWay = (...numbers) => {
    //return 'sum' if the sum of the first two numbers equals the third
  if (numbers[0] + numbers[1] === numbers[2]) return 'sum';
    // return 'difference' if the first number minus the second equals the third
  if (numbers[0] - numbers[1] === numbers[2]) return 'difference';
    // return 'product' if the product of the first two numbers equals the third
  if (numbers[0] * numbers[1] === numbers[2]) return 'product';
    // return 'fraction' if the first number divided by the second equals the third
  if (numbers[0] / numbers[1] === numbers[2]) return 'fraction';
    // return null if none of the above are true
  return null;
}
