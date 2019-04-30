/*
Stringify
Define a function, stringify, that takes a callback and returns a new 
function. When the new function is called, it should call the callback, 
and return the value returned by the callback, but not before explicitly 
coercing the returned value to a string.
*/

// https://www.youtube.com/watch?v=CeV9cNo1NjQ

function stringify (callback) {
    // return a function that receives a number
    //  and calls the callback passing a string in
    return input => String(callback(input));
}


// TEST CONDITIONS
function returnsANumber() {
  return 100;
}

let newFunction = stringify(returnsANumber);
console.log(typeof newFunction()); // => '100'