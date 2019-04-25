/*
Backward String
Write a function, backwardString, that receives a string. It should log 
every letter in the string, from the last character to the first. Use 
recursion.

NOTE: As with the last problem, the tests will check how many times 
console.log is called.
*/

function backwardString2(inputString) {
    // if the input is a string, convert it to an array of chars
    if (typeof inputString === "string")
        inputString = inputString.split('');
    // pop off the array of chars and print the pop return
    if (inputString.length > 0) {
       console.log(inputString.pop());
       backwardString(inputString);
    }
}

// A MORE EFFICIENT WAY IS TO USE THE STRING METHOD SLICE 
//  (i must be getting tired)
function backwardString(inputString) {
    console.log(inputString[inputString.length -1]);
    if (inputString.length > 1)
        backwardString(inputString.slice(0, -1));
}



backwardString('happy');
// y
// p
// p
// a
// h