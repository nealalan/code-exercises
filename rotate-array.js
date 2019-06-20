// note: you need define the parameters in the function if needed

function rotate(inputArray, rotate = 0) {
    for (let i = 0; i < rotate; i++) {
        inputArray.unshift(inputArray.pop());
    }
    return inputArray;
    // another way to handle this would be to mod down the rotate < length
    //  splice off the end count (returns what's removed)
    //  add unshift the pieces back on:
    //   inputArray.unshift(inputArray.splice(inputArray.length - rotate, rotate))

}

module.exports = rotate;
/*
console.log(rotate([22, 11, 500, 92], 6), ([500, 92, 22, 11]));
console.log(rotate([11, 15, 28, 9, 10], 0), ([11, 15, 28, 9, 10]));
console.log(rotate([7, 8, 9, 10, 11], 5), ([7, 8, 9, 10, 11]));
*/