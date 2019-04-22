/*
Even and Odd: Define a function, evenAndOdd, that accepts an array.

evenAndOdd should return a new array. The first element in the new array should be 
an array with all of the even numbers from the original array. The second element 
in the new array should be an array with all of the odd numbers from the original 
array.

evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
*/

const evenAndOdd = (inputArray) => {
    const isOdd = (num) => {return num % 2}

    let outputArray = [[],[]];

    for (let i = 0; i < inputArray.length; i++) isOdd(inputArray[i]) ? 
        outputArray[1].push(inputArray[i]) : 
        outputArray[0].push(inputArray[i]);
    return outputArray;
}


console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
console.log(evenAndOdd([0, -4, -999, 71, 42]));
