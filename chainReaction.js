/*
Chain Reaction
Define a function, 'chainReaction', that takes a starting value and an 
array of functions.

'chainReaction' should pass the starting value into the first function 
in the array. It should pass the value returned by the first function 
into the second function, and so on until every function in the array 
was called.

'chainReaction' should return the final value returned by the final 
function in the array.
*/

let chainReaction = (startingValue, arrayOfFunctions) => {
    let result = startingValue;
    
    // update the result with each function in the arrayOfFunctions
    //for (let i = 0; i < arrayOfFunctions.length; i++) 
    //    result = arrayOfFunctions[i](result);

    // OKAY... SO I GUESS THE POINT WAS TO USE .forEach & ANON FUNCTION
    arrayOfFunctions.forEach(function (callbackFunction) {
        result = callbackFunction(result);
    })

    return result;
}




// TEST COND
function addTen(num) {
  return num + 10;
}
function subtractFive(num) {
  return num - 5;
}
function multiplyFive(num) {
  return num * 5;
}
console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen])); // => -15