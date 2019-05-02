/*
Search Party
Write a function, searchParty, that accepts a name and a world object. The 
keys in the world objects describe a location. The values can be any 
combination of strings, arrays, or other objects.

Search through the whole world for the given name. Return an array with 
directions to the person if you find them. Return null if you can't find 
them.
*/

function searchParty (inputName, worldObject) {
    let output = [];

    for (let key in worldObject) {
        // check the current key value is the inputName
        //  ** base condition!!!
        if ((worldObject[key] === inputName) || (output.length > 0))
            return [key];
        // check for the inputName in the array
        //   ** Another base condition
        //   this didn't seem to need to be in the instructions or
        //   test data, but is plausable based on the test data
        if (Array.isArray(worldObject[key]) && worldObject[key].includes(inputName))
            return [key];
        // check the value of current key is an object
        //  if so, we need to recurse deeper to look for the name
        //  if it's found, start splicing the keys to the beginning of the
        //    returned array as we back down the recursed stack
        if (typeof worldObject[key] === 'object') {
            let returnValue = searchParty(inputName, worldObject[key]);
            if (returnValue != null) {
                returnValue.splice(0,0,key);
                return returnValue;
            }
        }
    }
    // if the inputName was not found, ignore output array and return null
    if (output.length === 0) return null;
    return output;
}

// TEST CONDITIONS
let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis',
    'Basement': ['Neal','Alan']
  },
  'Subway': ['Jackie', 'Grumio']
};

console.log(searchParty('Francis', world)); // => ['Fullstack', '25th floor']
console.log(searchParty('Franco', world)); // => null
console.log(searchParty('Neal', world));