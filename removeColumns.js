/*
Remove Columns: Write a function removeColumns that accepts two arguments

originalGrid (two-dimensional array)
numColums (number)
removeColumns should return a new grid with the correct number of columns removed.

removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 2);
/* => [[1],
       [1],
       [1],
       [1]]
*/
const removeColumns = (originalGrid, numColums) => {
    for (let i = 0; i < originalGrid.length; i++) 
        originalGrid[i].splice(originalGrid[i].length - numColums, numColums);
    return originalGrid;
}


console.log(removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2));