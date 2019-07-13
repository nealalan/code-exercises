// NEAL DREHER

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/*
## Rotater = Return a function that can "rotate" the given string
### Topics:
    - working with strings
    - higher order functions
    - closure
*/
// rotater
//     takes a string and returns a function
//     the function takes a number and returns a string
//     the returned function returns the original string rotated by the given number
//     once told to rotate fully will afterwards rotate in the other direction
//     ditto, but with a different string

function rotater (string) {
    let rotateBack = false;

    return function (num) {
        console.log(`\nswitch num:`, num, `string.length:`, string.length);
        if (num === string.length) {
            rotateBack = !rotateBack;
        }
        // DO THE RECIPROCAL
        if (rotateBack) {
            console.log(`\nbackward!`, string.slice(string.length - num), string.slice(0, string.length - num));
            return string.slice(string.length - num) + string.slice(0, string.length - num);
        }
        // GRAB EVERYTHING AFTER THE NUMBER, ADD ON EVERYTHING FROM 0 TO THE NUMBER
        else {
            console.log(`\nforwards!`, string.slice(num), string.slice(0, num));
            return string.slice(num) + string.slice(0, num);
        }
    }
}
