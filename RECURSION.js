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
    if (num < 1) return 0;
    if (num === 1) return 1;
    let result = num * factorial(num - 1);
    console.log(num, result);
    return result;
}
console.log(factorial(10));
// notice the output goes to the base case first and then goes back!

// Start with the base case or you can't sole it recursively
//   test with the simpliest possible input
//   think about what thing should a function return
