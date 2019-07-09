/* eslint-disable no-unused-vars */

// concatString: Using the arguments "array-like object" allows you to call a function with arguments like normal
// NOTE: Arrow functions don't have function.prototype.arguments!
function concatString() {
    //debugger;
    //const args = [].slice.call(arguments);
    // concatString: Using the arguments "array-like object" uses `Array.from` to change the arguments Array-like 
    // object to an actual array object, Expected spy from to have been called.
    const args = Array.from(arguments);
    return args.join('');
}

//ReferenceError: yourFunctionRunner is not defined
function yourFunctionRunner() {
    //return arguments[0]; // THIS WILL ONLY RETURN THE FUNCTION AND NOT RUN THE FUNCTION
    //return arguments[0](); // THIS WILL RUN THE FUNCTION
    let output = '';
    //Expected '' to equal 'Called Value and Other Value'.
    for (let i = 0; i < arguments.length; i++) 
        output += arguments[i]();
    return output;
}

// makeAdder returns a function
// ReferenceError: makeAdder is not defined
    // makeAdder takes a number argument and returns a function that adds the number passed 
    // to `makeAdder` to its own number argument
// let makeAdder = () => {
//     let storedNumber = 0;
//     return (inputNumber) => storedNumber += inputNumber;
// }

function makeAdder3() {
    let storedNumber = arguments[0];
    return (inputNumber) => storedNumber += inputNumber;
}
function makeAdder0(storedNumber) {
    return (inputNumber) => storedNumber += inputNumber;
}
const makeAdder = function(storedNumber) {
    return returnedFunc = (inputNumber) => storedNumber += inputNumber; 
}
const makeAdder2 = storedNumber => {
    return (inputNumber) => storedNumber += inputNumber;
}
const makeAdder4 = storedNumber => (inputNumber) => storedNumber += inputNumber;

// once accepts a function argument and returns a new function

const once = function(callback) {
    let calledCount = 0;

    // the function we return must actually contain the test condition to determine if 
    //  it's already been called
    // if iot has not, then increment the calledCount and make the call!
    return function stupidFrustratingFunction() {
        if (calledCount) { 
            return 'the function has already been called...';
        }
        else { 
            calledCount += 1; 
            return callback();
        }
    };
}

// "shared contexts" should return an object with four methods
const createObjectWithClosures = function() {
    let lengthVar = 0;
    return {
        oneIncrementer: function () {
            lengthVar += 1;
        },
        tensIncrementer: function () {
            lengthVar += 10;
        },
        getValue: () => lengthVar,
        setValue: function (input) {
            lengthVar = input;
        }
    };
}

// Don't Spill The Beans `dontSpillTheBeans` is a function

const dontSpillTheBeans = (secret = '') => {
    return { 
        // return the closure var secret with arrow func
        getSecret: () => secret,
        // set the closure var secret with anon function
        ///   note: explicit func names are not a good practice
        setSecret: function (input) {
            secret = input;
        }
    };
}
