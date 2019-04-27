/*
Sum Nums
Write a function, sumNums, that takes a number greater than 1 and returns 
the sum of all the numbers between the given number and 1. Use recursion.
*/

let sumNums = inputNumber => (inputNumber <= 0) 
                    ? 0 
                    : inputNumber + sumNums(inputNumber -1);

                    /*
let sumNums = (inputNumber) => {
    if (inputNumber === 1) return inputNumber;
    return inputNumber + sumNums(inputNumber -1);
}
*/

// NOTE: I'd really like to know why inputNumber-- doesn't work the same as
//  inputNumber-1

console.log(sumNums(3)); // => 6 (3 + 2 + 1)
console.log(sumNums(1)); // 1
console.log(sumNums(23)); // 276
console.log(sumNums(100));
console.log(sumNums(-2));