/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const repeat = (inString, inNum) => {
    let outputString = '';
    for (let i = 0; i < inNum; i++) outputString += inString;
    return outputString;
}

const sum = (inNumArray) => {
    let outputNum = 0;
    for (let i = 0; i < inNumArray.length; i++) outputNum += inNumArray[i];
    return outputNum;
}

const join = (inArray, seperator = '') => {
    let outputString = '';
    for (let i = 0; i < inArray.length; i++) (i === 0) ? outputString += inArray[0] : outputString += seperator + inArray[i];
    return outputString;
}

const gridGenerator = (gridSize) => {
    let theGrid = '';
    for (let row = 1; row <= gridSize; row++) {
        for (let col = 1; col <= gridSize; col++) {
            ((row % 2 !== 0 && col % 2 !== 0) || (row % 2 === 0 && col % 2 === 0)) ?
                theGrid += '#' :
                theGrid += ' ';
        }
        theGrid += `\n`;
    }
    return theGrid;
}

const paramify = (inObject) => {
    let outArray = [];
    for (let i in inObject) {
        if (inObject.hasOwnProperty(i)) outArray.push(i + '=' + inObject[i]);
    }
    return outArray.sort().join('&');
}

const paramifyObjectKeys = (inObject) => {
    let outArray = [];
    let keys = Object.keys(inObject);
    for (let i = 0; i < keys.length; i++) outArray.push(keys[i] + '=' + inObject[keys[i]]);
    return outArray.sort().join('&');
}
//console.log(paramifyObjectKeys({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }));

const sort = (inputArray) => {
    let outputArray = [];
    let itemCount = inputArray.length;
    while (outputArray.length < itemCount) {
        // set the lowest to compare with the first remaining inputItem
        let currentItem = {lowest: inputArray[0], index: 0};
        // find the lowest item remaining in the inputand splice it out of the input
        for (let i = 1; i < inputArray.length; i++) {
            // keep finding the lowest item left in input
            if (inputArray[i] < currentItem.lowest) {
                currentItem.lowest = inputArray[i];
                currentItem.index = i;
            }
        }
        // push the lowest to the outputArray
        inputArray.splice(currentItem.index, 1);
        outputArray.push(currentItem.lowest);
    }
    return outputArray;
}
