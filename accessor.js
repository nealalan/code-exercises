// NEAL DREHER
// 2019-07-10

/* eslint-disable no-unused-vars */
/*
## Accessor

There isn't a description for this problem. Read an interpret the test specs.
Tip: When a function returns another function, what is potentially created?

## Topics
- closure
- dot vs bracket notation

TEST CONDITIONS
accessor
    takes an object and returns a function
    the returned function can get properties of the given object
    the returned function can set properties of the given object
*/

// we are returning a function so probably shouldn't use an arrow function
// first test a key and value are passed in
function accessor (obj) {
    // when the test calls the function returned and assigned to a new var, 
    //  we pass a key
    // thanks to closure, the object is within the lexical environment of the 
    //  function we previously returned
    // if we don't have a value passed, then use the existing value to pass back
    return (key, value = obj[key]) => obj[key] = value;
}
