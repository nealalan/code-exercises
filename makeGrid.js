/*
Make Grid
Write a function makeGrid that accepts two arguments:

numColumns (number)
numRows (number)
makeGrid should return a two-dimensional array that represents a grid of the given dimensions.

makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/

const makeGrid = (numColumns, numRows) => {
    let output = [];
    for (let row = 0; row < numRows; row++) {
        let newRow = [];
        for (let col = 0; col < numColumns; col++) {
            newRow.push(col + 1);
        }
        output.push(newRow);
    }
    return output;
}

console.log(makeGrid(3,4));
console.log(makeGrid(0,0));
console.log(makeGrid(20,12));