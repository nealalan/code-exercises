// note: you need define the parameters in the function if needed

/*
Create the function 'splitter' that splits a string into pairs of 
characters and adds each pair to an array. If the string contains 
an odd number of characters then it should replace the missing second 
character of the final pair with an underscore ('_').
INPUT: splitter('fullstack');
OUTPUT: ['fu', 'll', 'st', 'ac', 'k_'];
*/

function splitter(inputString) {
    let outputArray = [];

    if (inputString.length % 2) inputString += '_';
    //console.log(inputString);
    for (let i = 0; i < inputString.length; i+=2) 
        outputArray.push(inputString.slice(i, i+2));

    return outputArray;
}

module.exports = splitter;

//console.log(splitter('fullstack'));

// A great solution that's not as easy to read...?
// Alternate solution using Array.prototype.match
// function solution(str) {
//   return (str.length % 2 ? str + '_' : str).match(/../g);
// }