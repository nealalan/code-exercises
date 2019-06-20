/*
Create the function mineFinder that accepts a multidimensional array. The each array 
in the multidimensional array is filled with the number 0. The only exception is the 
mine, the mine is represented with the number 1. The mineFinder function returns an 
array of coordinates from where the mine is located at.

Example:
INPUT: mineFinder([[0,0], [0,0], [0,1], [0,0]]);
OUTPUT: [2,1]
*/

// assuming: 
//  - only 2 dim arrays are ever used, so will not not need a recursive solution
//  - only 1 mine will occur
let mineFinder = (inputArray) => {
    let outputArray = [];
    
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            if (inputArray[i][j]) {
                // don't need output to hold multiple mines!
                //let outputArrayItem = [];
                //outputArrayItem.push(i, j)
                //outputArray.push(outputArrayItem);
                outputArray.push(i, j);

            }
        }
    }

    return outputArray;
}
//console.log(mineFinder([[0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 1]]));
