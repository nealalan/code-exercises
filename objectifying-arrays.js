// Write a function that accepts a nested array and returns a 
// well-structured object. The array passed into the function will 
// look like the one below and have only four levels of nested-ness.
// var data = [ (THIS IS [i] = THE WHOLE [animals array...])
//  [ 'animals',  (THIS IS [i][0])
//  [
//    'dogs', (THIS IS [i][1][j]) ['Corgi', 'Sheltie'], (THIS IS THE VALUE [i][1][j+1])
//    'cats', ['Tabby','Black'],
//    'pigs', ['Teacup']
//  ]
//],


function objectifier(inputArray) {
    let outputObject = {};

    for (let i = 0; i < inputArray.length; i++) { 
        outputObject[inputArray[i][0]] = {};
        //console.log(inputArray[i]);
  
        for (let j = 0; j < inputArray[i][1].length; j++) {
            // odds are the key, evens are the value of that key
            if (j % 2 === 0) {
                outputObject[inputArray[i][0]][inputArray[i][1][j]] = inputArray[i][1][j+1];
            }
        }
    }

    return outputObject;
}

module.exports = objectifier;
