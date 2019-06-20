// ASSUMPTION: no mixed input number & strings to handle!

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

    /* AND I SEE THE LAST TEST CONDITION NOW...
    // if the input is numeric, use a 'compare function' to see which is lower (first)
    if (typeof inputArray[0] === 'number') return inputArray.sort((a, b) => a - b);

    // otherwise, sort strings by comparing UTF-16 code
    return inputArray.sort();
    */


console.log([3, 9, 17, 27, 43, 216], 'right');
console.log(sort([17, 43, 216, 3, 9, 27]));
console.log([-43, -9, 3, 17, 27, 216], 'right');
console.log(sort([17, -43, 216, 3, -9, 27]));
console.log(['aardvark', 'pretzel', 'prune', 'toad', 'tuna', 'weasel'], 'right');
console.log(sort(['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel']));
console.log([-443, -9, 107, 216, 247, 300], 'right');
console.log(sort([107, -443, 216, 300, -9, 247]));
