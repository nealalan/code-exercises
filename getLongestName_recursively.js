/*
Get Longest Name
Write a function, getLongestName, that takes an object. The object 
represents a family tree. Return the longest name in the family.
*/
function getLongestName (inputObject) {
    // helper function to determine the longest between current and last
    const getLonger = (i1, i2) => (i1.length < i2.length) ? i2 : i1;
    let longestName = '';
    // nest into the base value for each object
    for (let key in inputObject) {
        // check the current key length, whether it has children or not
        longestName = getLonger(key, longestName);
        // if the value of the current key has children, 
        if (inputObject[key])
            // recurse and check if the longest key returned is longest
            longestName = getLonger(key, getLongestName(inputObject[key]));
    }
    return longestName;
}

let family = {
  'Beverly Marquez': {
    'Nina Rhone66666666666666666': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth': null
    },
    'AB99999999999999999999999999': null
  }
};

console.log(getLongestName(family)); // => 'Sir Paddington the Fourth, of the county Wilstonshire'