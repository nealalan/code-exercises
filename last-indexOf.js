// note: you need define the parameters in the function if needed

function myLastIndexOf(inputArray, searchValue, maxIdx = inputArray.length-1) {
    for (let i = maxIdx; i > -1; i--) {
        if (inputArray[i] == searchValue) return i;
    }
    return -1;
}

module.exports = myLastIndexOf;

//console.log(myLastIndexOf([1,2,3,2,4],2));