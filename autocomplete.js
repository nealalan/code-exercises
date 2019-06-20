
let autocomplete = (inputString, dictionaryArray) => {
    let outputArray = [];

    // loop through all of the dictionary items
    for (let i = 0; i < dictionaryArray.length; i++) {
        let match = true;
        // check each letter in the search matched the corresponding dict letter
        for (let j = 0; j < inputString.length; j++) {
            if (inputString[j] !== dictionaryArray[i][j]) match = false;
        }
        // all letters matched, add to output 
        if (match) outputArray.push(dictionaryArray[i]);
    }
    return outputArray;
}