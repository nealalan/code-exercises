/* eslint-disable no-unused-vars */

// multipleMaps
//     multipleMaps is a function
//     multipleMaps returns an array
//     the values from the first array argument are mapped to the array of objects in the second array argument
//     properly maps values from the first array argument when there are multiple maps in the second argument
//     Array.prototpye.map is used

const multipleMaps = (inputArray, multiMaps) => {
    // PARSE THROUGH THE INPUT ARRAY
    return inputArray.map((item) => {
        // DEAL WITH THE MULTIPLE MAPS
        for (let map of multiMaps) {
            // USE EACH ITEM READ FROM INPUT AS THE KEY 
            if (item in map) return map[item];
        }
    });
}

console.log(multipleMaps([1, 3, 2, 3], [{ 1: '!', 2: '@' }, { 3: '#' }]));

