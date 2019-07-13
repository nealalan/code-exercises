// NEAL DREHER 2019-07-12

/* eslint-disable no-unused-vars, no-extend-native */

// doNotInclude
//     the doNotInclude method is added to the Array.prototype object
//     returns an array
//     does not include the index values from the array passed to `doNotInclude`
//     works with a number argument in addition to an array argument seen in previous tests
//     calls Array.prototype.filter

Array.prototype.doNotInclude = function (idxArray) {
    if (!Array.isArray(idxArray)) idxArray = [idxArray];
    // console.log('\nIdxArray: ', idxArray, ' This:', this);
    // GO THROUGH EACH ITEM IN THIS (array)
    return this.filter((value, index) => {
        // console.log(' ITEM:', index, ':', value);
        // SEE IF THE ARRAY ITEM IS IN (idxArray) PASSED
        if (idxArray.includes(index)) return;
        // IF IT IS NOT, RETURN THE VALUE
        else return value;
    });
}

// *****
// This problem infuriated me because I was trying to do a idxArray.isArray() and it
// messed up the valid code
// *****
