// NEAL DREHER
// 2019-07-10 93 degrees outside in Chicago
// https://github.com/nealalan/code-exercises/create-functions.js

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

// ### Create Functions
// Create a function, which returns an array of functions. Each function returns 
// their index in the array.  Here is an example:
// ```js
// var arrayOfFunctions = createFunctions(5); // create an array, containing 5 
// functions
// arrayOfFunctions[0](); // must return 0
// arrayOfFunctions[3](); // must return 3
// arrayOfFunctions[arrayOfFunctions.length - 1 ](); // must return 4
// ```
// Apply concepts such as Closure and Scope to this problem.  Please add comments 
// if you struggle with the problem, this will help us assign partial credit!
// **NOTE: YOU MAY NOT USE THE ES6 KEYWORD 'LET' IN THIS PROBLEM. FOR FULL CREDIT, 
//  YOU MUST COMPLETE THIS PROBLEM USING ONLY ES5**

/*TEST CONDITIONS
createFunctions
    createFunctions returns an array of functions
    the resulting array is the same length as the given number
    all indexes in the array are functions
    when functions in the array are invoked they return the correct number
    random values for n
    createFunctions does not call Array.prototype methods
*/

// function createFunctions (count) {
//     let arr = [];

//     // Each function returns their index in the array.
//     for (let i = 0; i < count; i++) arr[i] = () => i;

//     // Create a function, which returns an array of functions. 
//     return arr;
// }

function createFunctions (count) {
    var arr = [];

    // Each function returns their index in the array.
    for (var i = 0; i < count; i++) {
        var now = i;
        arr[i] = another(i);
    }

    function another(x) {
        return function retFunc() { return x; }
    }
    // Create a function, which returns an array of functions. 
    return arr;
}
