/*
Crazy Caps
Define a function, crazyCaps, that accepts a string as an argument. crazyCaps 
should return a string in which every other character is capitalized. The 
first letter should be lower-cased.
crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
*/

const crazyCaps = (inputString = '') => {
    let outputString = '';
    // starting at the second letter, 
    //  add the lower letter before to the output 
    //  add the even letter as upperCase to the output
    for (let i = 1; i < inputString.length; i += 2) {
        outputString += inputString[i-1] + inputString[i].toUpperCase();
        // if odd number of letters & we are at the end of the even upperCase
        //  letters, add the additional lower case letter to the end
        if (inputString.length % 2 && i + 2 === inputString.length) 
            outputString += inputString[i+1]
    }
    return outputString;
}


console.log("function is a:    " + typeof crazyCaps);
console.log("returns a string: " + typeof crazyCaps());
console.log("abcdefghij:       " + crazyCaps("abcdefghij"));
console.log("this is crazy:    " + crazyCaps("this is crazy"));
console.log("space:            " + crazyCaps(""));
console.log("10:               " + crazyCaps(10));