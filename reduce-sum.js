/* Write a function that uses the native Array .reduce method to sum 
up an array of numbers, but starting at 50.*/

const sumReduce = (inputArray) => {
    return inputArray.reduce((previousValue, currentValue) => {
            return previousValue + currentValue; 
        }, 50);
}

module.exports = sumReduce;
