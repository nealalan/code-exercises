/*
## Symmetric Difference is the difference between two sets.

symmetricDiff(A, B, C);
// Translates to:
symmetricDiff(symmetricDiff(A,B),C);

Review the [following video](https://www.youtube.com/watch?v=PxffSUQRkG4) for an
 in depth explanation the Symmetric Difference.
*/
// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.
// if difference was defined using an expression assignment using 
// let or const, it is not accessible on the "window" object
// the test specs spy is using. Feel free to change the names of the
// paramaters, but if you want your specs to pass keep the function
// declaration syntax.
//
// TEST CONDITIONS
// symmetric difference
//     difference
//         returns an array
//         returns the unique index values from the first argument (array)
//         returns the unique index values for non-integer values
//         calls Array.prototype.filter
//     symmetricDiff
//         returns an array
//         returns the Symmetric Difference
//         returns the Symmetric Difference for non-integer values
//         calls the difference function

function difference(arrayOne, arrayTwo) {
    
    const output = arrayOne.filter(item => {
        if (arrayTwo.includes(item)) return; 
        else return item;
    });
    return output;
}
// Union of A and B without the intersection items
function symmetricDiff(arrayOne, arrayTwo) {
    return difference(arrayOne, arrayTwo).concat(difference(arrayTwo, arrayOne));
}
