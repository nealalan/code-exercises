
// Remove all zeros in a number
//  - Check for no numbers but zero, return NaN if so
//  - Convery the Num to a String to replace zeros with null and convert the returns
//    string back to a Number to return to the caller
const removeZeros = (inputNumber = 0) => inputNumber === 0 ? 
    NaN : Number(String(inputNumber).replace(/[0]/g,''));

module.exports = removeZeros;


console.log(removeZeros(1023004));
console.log(removeZeros(0));
console.log(removeZeros(10.0001));