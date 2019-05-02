// RECURSION - when a function calls itself; alternative to iteration (loops)
// function CALL STACK - single threaded so only can run one func at a time
// function gets added to the top of the call stack

// COUNTDOWN EXAMPLE
// iterative
function countdown(x) {
    for (; x >= 1; x--)
        console.log(x);
}
countdown(5);

// refactor to recursion
// INCORRECT STACK OVERFLOW = calls iteself infinite number of times
function countdown2(x) {
    console.log(x);
    countdown2(x-1);
}
//countdown2(5);

// STOP CONDITION
function countdown3(x) {
    if (x > 0) {
        console.log(x);
        countdown3(x-1);
        return;
    }
    console.log('done');
}
countdown3(5);

// FACTORIAL EXAMPLE:  3! === 6 (3 * 2 * 1)

function factorial(num) {
    // base case
    if (num < 1) return 0;
    if (num === 1) return 1;
    // recurse & return build up
    let result = num * factorial(num - 1);
    console.log(num, result);
    return result;
}
console.log(factorial(10));
// notice the output goes to the base case first and then goes back!

// Start with the base case or you can't sole it recursively
//   test with the simpliest possible input
//   think about what thing should a function return


// 
console.log('\nNESTED ARRAYS')
let arrayA = [1,[2,3]];

function logsAnArray (array) {

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (Array.isArray(element)) logsAnArray(element);
        else console.log(element);
    }
}
logsAnArray(arrayA);

console.log('\nNESTED OBJECTS:')
// This works fine without using recursion
//  BUT if the next key is for an object, you can't add an object to sum!
function sumVals (obj) {
    let sum = 0;
    for (let key in obj) {
        let value = obj[key];
        sum += value;
    }
    return sum;
}
console.log(sumVals({a: 10, b: 20}));
// ADD RECURSION and you can handle any Object value that's another object
function sumVals2 (obj) {
    let sum = 0;
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'object') {
            sum += sumVals2(value);
        } else {
            sum += value;
        }
    }
    return sum;
}
console.log(sumVals2({a: 10, b: {'1': 90, '2': 11, '3': {default: -111}}}));