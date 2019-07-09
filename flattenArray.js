const multiDimArray = [[1, 2], 3, [4, [5, 6], 7], [8, 9]];

// will not work
//const multiDimArray = [0, [1, 2], 3, [4, [5, 6], 7], [8, 9]];


const flatten = (accum, currentIdx) => {

    if (Array.isArray(currentIdx)) {
        console.log(currentIdx, 'is');
        // the current constraint with this logic is the first value must be an array
        //  in order to concat to the accum
        // this makes doing this recursively, unrealistic since their is no guarantee
        //  the first item will always be the array
        //       currentIdx.reduce(flatten);
    }
    return accum.concat(currentIdx);
}
const flattenedArray = multiDimArray.reduce(flatten);

console.log(flattenedArray);

//const flattenedArray2 = flattenedArray.reduce(flatten);
