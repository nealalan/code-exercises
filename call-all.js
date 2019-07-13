/* eslint-disable no-unused-vars */
/*
## The Call All Function
Create the function "call all" that accepts an object and an array of 
functions as arguments. Invoke each function in the array of functions 
and assign the context of `this` in each function to the object passed
as the first argument. After each function invocation, store the value 
in new array and return the array.
### Topics
- `this` keyword (Explicit Binding Rule)
- **** Array.prototype.map 

TEST CONDITIONS:
call all
    takes an object and an array and returns an array
    calls all of the functions in the array
    **** calls each function using the object as the context
    returns an array of each functions return values
    returns an array of each functions return value
    **** detects if Function.prototype.call is used on each function 
        in the function array
*/

function callAll(obj, funcArray) {
    // detects if Function.prototype.call is used on each function 
    // EXPLICITLY BIND USING Function.prototype.call(this)
    const funcArrayCallback = item => item.call(obj);
    return funcArray.map(funcArrayCallback);
}
