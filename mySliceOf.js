// NOTE: NEVER GOT THIS TO WORK BECAUSE 
// INFINITY LOOPS HAPPEN WHEN THE LETTER IS NOT FOUND INSTEAD OF RETURNING -1
// ONE FIX I ADDED FOR THIS CAUSE EVERYTHING THAT WENT TO THE END OF THE 
// source AND A MATCH IS FOUND TO RETURN -1
// WOULD NEED TO ADD MORE LOGIC TO HANDLE A GLOBAL "MATCH FOUND"

// AFTER 3 HOURS OF MESSING WITH THIS, I LOOKED UP THE SOLUTION AND FOUND OUT
// IT WAS ACCEPTABLE TO USE .slice

// AT LEAST I GOT SOME GOOD DEBUGGER PRACTICE


/*
My Index Of: Define a function, myIndexOf, that accepts three arguments:
source (string)
searchValue (string)
startIdx (number) - optional

If the source contains the searchValue, return the index at which the searchValue 
starts. If the searchValue appears more than once in the source, return the index 
from the first occurance of the searchValue. 

If a startIdx is passed into the function, ignore any instances of the searchValue 
that occur before that index. If no startIdx is provided, start searching from the 
beginning of the source.

Do not use the built-in .indexOf string method in your answer. Feel free to use it 
in all future workshop problems though!
*/
const myIndexOf = (source, searchValue, startIdx = 0) => {
    // will be zero unless the user sets a startIdx
    let locIdx = startIdx;
    let notAFullMatch = true;
    let searchNotComplete = true;
    // if there is multiple letters in the searchValue, don't exit until all checked
    while (notAFullMatch && searchNotComplete) {
        // loop through searching for the first letter in the searchValue
        for (; source[locIdx] != searchValue[0]; locIdx++) {}
        // if the search value > 1; check the rest of the searchValue
        if (searchValue.length > 1) {
            let locIdx1 = locIdx +1;
            for (let searchValueIdx = 1; searchValueIdx < searchValue.length; searchValueIdx++, locIdx1++) {
                // move on to the next locIdx and re-continue the for loop
                if (source[locIdx1] != searchValue[searchValueIdx]) {
                    locIdx++;
                    break;
                }
                // you made it and they all match
                if (searchValueIdx = searchValue.length -1) searchNotComplete = false;
            }
        } else // it's only one char and they matched, so we are done
            searchNotComplete = false;
        
        if (locIdx === source.length) {
            notAFullMatch = false;
            return -1;
        }
    }
    // If the searchValue doesn't exist in the source, return -1.
    return locIdx;

}
//console.log("loop1: " + source[locIndex] + " " + searchValue[0])

console.log("function is a:    " + typeof myIndexOf);

console.log("0:  " + myIndexOf('hello', 'h')); // => 0
console.log("1:  " + myIndexOf('hello', 'e')); // => 1
console.log("2:  " + myIndexOf('hello', 'l')); // => 2
console.log("2:  " + myIndexOf('hello', 'l')); // => 2
console.log("4:  " + myIndexOf('hello', 'o')); // => 4
console.log("8:  " + myIndexOf('twide twice', 'ice')); // => 8
// find the index of the first instance of 'ice' starting at index 5.
console.log("8:  " + myIndexOf('twice twice', 'ice', 5)); // => 8
console.log("-1: " + myIndexOf('twice twice', 'z')); // => 8
