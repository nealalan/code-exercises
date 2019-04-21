/* 
Odd Couple Define a function, oddCouple, that 
 - accepts an array of numbers as an argument.
 - oddCouple should return a new array with the first two odd numbers from the original array:
  v - oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
 - If fewer than two odd numbers exist in the original array, 
    - return an empty array or an array with the only odd number:
    - oddCouple([10, 15, 20]); // => [15]
    - oddCouple(2, 4, 6, 8); // => []
*/
// YOUR CODE BELOW

const oddCouple = (numbers) => {
  let output = [];
  for (let i = 0; i < numbers.length && output.length < 2; i++)
    (numbers[i] % 2) ? output.push(numbers[i]) : null;
  return output;
}

console.log("oddCouple([3, 6, 9, 12, 15] returns: " + oddCouple([3, 6, 9, 12, 15]));
console.log("oddCouple([14, 21, 28] returns: " + oddCouple([14, 21, 28]));
console.log("oddCouple([4, 8, 12, 16]) returns: " + oddCouple([4, 8, 12, 16]));
            
