/*
My Join: Define a function, myJoin, that accepts up to two arguments:
array
separator (string, optional)

myJoin should return a string with all of the elements from the array joined togther. The separator should separate the joined elements:
myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"

If separator is undefined, use ',' as the default separator.
myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"

If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.
myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"

Do not use the built-in .join array method in your answer. Feel free to use it in all future problems though!
*/

const myJoin = (inputArray, separator = ',') => {
    let output = '';
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === null || inputArray[i] === undefined) inputArray[i] = '';
        output += inputArray[i];
        if (i !== inputArray.length -1) output += separator;
    }
    return output;
}

console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' '));
console.log(myJoin(['a', 'b', 'c'], '+'));
console.log(myJoin(['Peter', 'Paul', 'Mary']));
console.log(myJoin(['hello', undefined, 'world'], '-'));