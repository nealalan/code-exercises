// note: you need define the parameters in the function if needed

function myJoin(inputArray, delimiter = ',') {
    let outputString = '';
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== (undefined & null)) {
            // Only add delimiter if after first item
            if (i > 0) outputString += delimiter;
            outputString += inputArray[i];
        }
    }
    return outputString;
}

module.exports = myJoin;

/*
console.log(myJoin(['hello','world'], ' '));
console.log(myJoin([2, "be", false]));
*/