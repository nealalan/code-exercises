/*
Define a function, onlyOdds, that accepts a number as an argument. onlyOdds should should return the sum of all the odd numbers between the given number and 1.
If onlyOdds receives an argument less than 1, it should return 0.
onlyOdds(6); // => 9 (5 + 3 + 1)
*/

const onlyOdds = (inputNumber) => {
    let outputNumber = 0;
    // the loop will only execute if inputNumber > 1 
    for (let currentNumber = 1; currentNumber < inputNumber; currentNumber += 2) 
        outputNumber += currentNumber;
    return outputNumber;
}

console.log("number is a:        " + typeof onlyOdds());
console.log("10 is 1+3+5+7+9=25: " + onlyOdds(10));
console.log("-5 is zero:         " + onlyOdds(-5));