/* 
Determine if an input number isPrime
*/

function isPrime(inputNum) {
    if (inputNum === 1 || inputNum === 2) return true;

    for (let i = (Math.floor(inputNum/2)); i > 2; i--) {

        let divisor = inputNum / i;
        // if the remainder minus the remainder rounded down to a 
        //  whole number is not 0 then it's not a divisior
        //console.log(inputNum, '/', i, '=', remainder);
        if (divisor - Math.floor(divisor) === 0) {
            console.log('whole divisor:', i, divisor);
            return false;
        }
    }

    return true;
}

console.log('1', isPrime(1));
console.log('2', isPrime(2));
console.log('6', isPrime(6));
console.log('37', isPrime(37));
console.log('390000', isPrime(390000));