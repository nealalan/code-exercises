/*
Find Largest Three Digit Number
*/

function findLargestThreeDigitNumber (string) {
    let threeDigit = 0;

    for (let i = 0; i < string.length; i++) {
        let number = parseInt(string.slice(i,i+3));
        if (number > threeDigit) threeDigit = number;
    }

    return threeDigit;
}

console.log(findLargestThreeDigitNumber('1234567000008909999'));