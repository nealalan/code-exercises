// note: you need define the parameters in the function if needed

function flatten(inputArray) {
    let outputArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] !== 'object')
            outputArray.push(inputArray[i]);
        else
            // if this item is nested, recursively call untill it's 1 array
            //   concat to the outputArray and overwrite with new outputArray
            outputArray = outputArray.concat(flatten(inputArray[i]));
    }
    return outputArray;
}

module.exports = flatten;
/*
console.log(flatten([1,[2,3],4]));
console.log(flatten([[1, [2, [3]], 4], [5, 6]]), 'to', [1, 2, 3, 4, 5, 6]);
console.log(flatten([['hello', 'world']]), 'to', ['hello', 'world']);
*/