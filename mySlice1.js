
/*
My Slice: Write a function mySlice that accepts up to three arguments:

originalString (string)
startIdx (number, optional)
endIdx (number, optional)

mySlice should return a string. 
The returned string should be a copy of the original string. 
If the user defines a startIdx, the returned string should start at that index:

mySlice('slice and dice', 2)    // => ice and dice
If the user defined an endIdx, the returned string should end at the last index before the endIdx:

mySlice('slice and dice', 2, 5)    // => ice
If the user doesn't define either the startIdx or the endIdx, return the entire originalString:

mySlice('slice and dice')    // => slice and dice
You can assume the startIdx will always be less than or equal to the endIdx.

Do not use the built in .slice string method. Feel free to use it in all future workshop problems, though!
*/

const mySlice = (originalString, startIdx, endIdx = originalString.length) => {
    // string should be a copy of originalString? IDK
    let inputString = originalString;
    let outputString = '';
    // no startIdx (means no endIdx either)
    if (startIdx == undefined) return inputString;
    // do not include the endIdx char in the output!? confusing instructions
    for (let i = startIdx; i < endIdx; i++) 
        outputString += inputString[i];

    return outputString;
}

console.log("function is a:    " + typeof mySlice);
console.log("returns a string: " + typeof mySlice('a piece of pie'));
console.log("ice and dice:     " + mySlice('slice and dice', 2));
console.log("ice:              " + mySlice('slice and dice', 2, 5));
console.log("slide and dice:   " + mySlice('slice and dice'));
console.log("piece of pie:     " + mySlice('a piece of pie', 2));
console.log("piece:            " + mySlice('a piece of pie', 2, 7));
console.log("a piece of pie:   " + mySlice('a piece of pie'));
