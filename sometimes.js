// NEAL DREHER
// 2019-07-11

/* eslint-disable no-unused-vars */
/*
## Sometimes
Create the function `sometimes` that returns a function. The function returned
 should follow all the rules defined in the test specs.

### Topics:
    - closure
    - higher order functions
    - `.apply`
    - `arguments`
TEST CONDITIONS
sometimes
    should return a function object
    should return the `add` functions (the function passed to sometimes) return value the first 3 times the function is invoked
    should return the string 'I do not know!' on the 4th time the function is invoked
    each consecutive odd call returns the function's (the function passed to sometimes) return value
    each consecutive even call returns 'I do not know'
    uses '.apply' on the add function and passes it the 'arguments' object
*/

// HIGHER ORDER FUNCTION - RETURNS A FUNCTION
const sometimes = (inputFunc) => {
    let count = 0;  // CLOSURE
    
    return function () {
        count++;
        if (count === 4) return 'I do not know!';
        else if (count > 4 && !(count % 2)) return 'I do not know!';
        // **** uses '.apply' on the add function and passes it the 'arguments' object
        else return inputFunc.apply(null, arguments);  // .APPLY & ARGUMENTS
    }
}
