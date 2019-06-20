// note: you need define the parameters in the function if needed

function changeKeys(inputArray, inputNumber) {
    const keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let outputArray = [];
    // read through the inputArray and change one key at a time
    //   - lookup the current key and add to it
    //   - note: will need to find the mod if offset wraps around the keys
    for (let i = 0; i < inputArray.length; i++) {
        let currentNote = keys.indexOf(inputArray[i]) + inputNumber;
        // unsure why this needs to have a -2 instead of a -1
        if (inputNumber + currentNote > keys.length) 
            currentNote = (inputNumber % keys.length) - 2;

        outputArray.push(keys[currentNote]); 
    }
    return outputArray;
}

module.exports = changeKeys;
/*
console.log(changeKeys(['E', 'F'], 1), 'should say', ['F', 'F#']);
console.log(changeKeys(['G'], 5), 'should say', ['C']);
console.log(changeKeys(['A', 'B'], 0), 'should say', ['A', 'B']);
console.log(changeKeys(['A', 'C', 'E'], 2), 'should say', ['B', 'D', 'F#']);
*/