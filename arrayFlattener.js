/*
Array Flattener
Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

arrayFlattener should return a new, one-dimensional array.

arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
*/

const arrayFlattener = (inputArray = []) => {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        // could also use Array.isArray(intput)
        if (typeof inputArray[i] === "object") {
            for (let j = 0; j < inputArray[i].length; j++) outputArray.push(inputArray[i][j]);
        }
        else outputArray.push(inputArray[i]);
    }
    return outputArray;
}
console.log(arrayFlattener());
console.log(arrayFlattener([1,[2, 3], 4]));
console.log(arrayFlattener([1, 2, 3, 4]));
console.log(arrayFlattener(['dog','cat',[7]]));