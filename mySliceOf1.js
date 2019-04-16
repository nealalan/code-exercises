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
    
    for (let currentIdx = startIdx; currentIdx < source.length; currentIdx++) {
        //console.log("currentIdx: " + currentIdx + " source.length: " + source.length)
        //console.log("  searchValue: " + searchValue + " source.slice: " + source.slice(currentIdx, currentIdx + searchValue.length))        
        if (searchValue === source.slice(currentIdx, currentIdx + searchValue.length)) 
            return currentIdx;
    }
    return -1;
}

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

