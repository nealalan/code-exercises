// note: you need define the parameters in the function if needed

const sumOfDigits = (input = 0) => {
    // create a string verse so the num can be broken into pieces
    let inputStr = input.toString();

    if (inputStr.length === 1) return parseInt(inputStr);

    let currentNum = parseInt(inputStr[0]);
    let newInput = sumOfDigits(Number(inputStr.slice(1)));
    
    return currentNum + newInput;
}

module.exports = sumOfDigits;
