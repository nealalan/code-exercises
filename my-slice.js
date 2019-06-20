// note: you need define the parameters in the function if needed

function mySlice(inputArray, begin = 0, end = inputArray.length) {
    let outputArray = [];

    // adjust the begin and end values if they are negative, 
    //   to real values from the reverse
    if (begin < 0) begin += inputArray.length;
    if (end < 0) end += inputArray.length;
    // between the begin and end, copy items to outout
    for (let i = begin; i < end; i++) outputArray.push(inputArray[i]);
    
    return outputArray;
}

module.exports = mySlice;
/*
console.log(mySlice([1,2,1]));
console.log(mySlice([1,2,1], 1));
console.log(mySlice([1,2,3,4], 2, 3));
console.log(mySlice([1,2,3,4], 0, -1));
console.log(mySlice([1,2,3,4], -1));
*/