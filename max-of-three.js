/*
Write a function maxOfThree that accepts three number arguments. maxOfThree should return largest number of the three.

maxOfThree(5, 4, 10); // => 10
maxOfThree(7, 7, 4); // => 7
*/
// YOUR CODE BELOW

const maxOfThree = (...numbers) => numbers.sort(function (a, b){return b-a})[0];

const maxOfThree2 = (...numbers) => {
  numbers.sort(function(a, b){return b-a});
  return numbers[0];
}
