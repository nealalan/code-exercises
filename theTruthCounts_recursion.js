/*
The Truth Counts
Write a function, theTruthCounts, that accepts a multi-dimensional array 
of values. theTruthCounts should return the count of all truthy values 
inside the multidimesional array.
*/

function theTruthCounts (inputArray) {
    let count = 0;

    for (let key in inputArray) {
        if (Array.isArray(inputArray[key])) count += theTruthCounts(inputArray[key]);
        else {
            if (inputArray[key]) {
                count++;
                console.log(inputArray[key], 'is truthy');
            }
        }
    }
    return count;
}


console.log(theTruthCounts([0, [true, ['yes']]])); // => 2