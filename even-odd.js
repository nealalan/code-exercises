// note: you need define the parameters in the function if needed

function evenOdd(inputArray = []) {
    const odd = (x) => x % 2;

    let outputArray = [[],[]];
    for (let i = 0; i < inputArray.length; i++) 
       odd(inputArray[i]) ? outputArray[1].push(inputArray[i]) : outputArray[0].push(inputArray[i]);
    return outputArray;
}

module.exports = evenOdd;
/*
console.log(evenOdd([1,2,3,4,5,6]));
console.log(evenOdd([2, 4, 6, 8]));
console.log(evenOdd([1, 3, 5, 7, 9]));
console.log(evenOdd([12, 12, 33, 45, 59, 61]));
*/