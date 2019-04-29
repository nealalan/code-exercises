/*
PRIME FINDER
- find numbers between 1 and n that are prime
- 1 is not prime, 
- prime number = number that is divisible by exactly 2 numbers: 1 and itself
*/

let primeFinder = (number) => {
    let output = [];
    // CHECK UNTIL WE HIT THE BASE CASE
    //   no prime numbers below this so don't go further!!!
    if (number < 2) return output;

    // KEEP ADDING TO THE STACK TILL WE HIT BASE CASE
    // primeFinder returns an array
    output = primeFinder(number -1);

    // WE HIT THE BASE CASE, NOW CHECK AND RETURN 
    // if the current number is prime
    if (isPrime(number)) {
        console.log("prime:",number);
        // add it to the existing output
        output.push(number);
    } //else - not prime, don't add
    
    //  keep returning
    return output;
}

function isPrime(input) {
    for (var i = 2; i < input; i++) {
        if (input % i === 0) return false;
    }
    return true;
}

console.log(primeFinder(17));