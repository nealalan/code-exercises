/* eslint-disable no-unused-vars */

/* ### Interleave
Create the function `interleave` that accepts strings as arguments:

interleave("FOO", "bar");

The task is to "interleave" the strings, such that the resulting string 
(return value) looks like:
interleave("FOO", "bar"); // RETURNS: "FbOaOr"

Also, `interleave` can accept any number of strings:
interleave("HHh", "Aaa", "!.?"); // RETURNS: "HA!Ha.ha?"
interleave("987", "you", "ARE", "the", "246"); // RETURNS: "9yAt28oRh47uEe6"

TEST CONDITIONS:
interleave
    is a function
    interleaves two single-character strings, in the same order they are passed
    interleaves two strings of equal length
    does not care about case
    if the first string is longer, it will add the remaining characters to the end
    if the second string is longer, it will add the remaining characters to the end
    interleaves three strings
    interleaves three longer strings of equal length
    interleaves n strings
*/

function interleave () {
    const strings = Array.from(arguments);
    const maxLen = strings.reduce((accum, item) => {
        if (item.length > accum) return item.length;
        else return accum;
    }, 0);

    let output = '';
    for (let char = 0; char < maxLen; char++) 
        for (let str = 0; str < strings.length; str++) 
            if (strings[str][char] !== undefined) output += strings[str][char];
    
    return output;
}

//console.log(interleave("FOO", "bar", '0'));
