/* eslint-disable guard-for-in */
/* eslint-disable curly */
/* eslint-disable no-unused-expressions */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-unused-vars */

/*
Functional programming is another form of programming that is different than an Object Oriented Style used in earlier test specs. Functional programming emphasizes the use of functions as the primary programming construct, as opposed to OOP, which emphasizes the use of objects. Because of this, Functional Programming often makes use of Higher Order Functions!

Code written in a functional style strives to be modular, readable, and testable by using pure functions, and avoiding mutating data when possible. Understanding Functional Programming can make your code easier to read and maintain! Throughout the Functional TestSpecs you will create some of the most popular and used methods in functional languages such as:

- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)


This will give you a better understanding of each method. Even though you need to create them using an Imperative approach, you will have a better grasp on when and how to use the built-in methods when practicing declarative programming.
*/


/*
Re-Implement the Array.prototype.forEach method
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Test Conditions:
the function forEach
    console.log every value in the array individually
*/
//console.log('forEach(inputArray, callback)\n');
const forEach = (inputArray, callback) => {
    for (let i = 0; i < inputArray.length; i++) callback(inputArray[i]);
    return undefined;
}

/*
Re-Implement the Array.prototype.map method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Test Conditions:
the function map
    create a function that takes an element and returns double of it
    takes our doubling function and applies it to an array
    takes a tripling function
    should not use Array.prototype.map
*/
const doubler = (inputNum) => inputNum * 2;

/*
  Now let's use the `doubler` function and apply it over an
   entire array using a custom map function (that you need to create)

   the doubler function is only responsible for taking an input and returning
   an output, it doesn't produce side effects, it is a "pure" function

   the map function is responsible for
   - creating a new array
   - looping over the array argument
   - applying the function to each item in the array
   - storing the new values returned in the new array
   - returning the new array (the new array should be the same length as the original)
*/
const map = (inputArray, callback) => {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++)
        outputArray.push(callback(inputArray[i]));
    return outputArray;
}

/* 
Re-Implement the Array.prototype.filter method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

- filter takes an array and function as arguments
- the function passed to filter returns true or false
- filter iterates on all values in the array and runs
the function argument on each value. if the function returns
true the value is added to the new array filter creates.
- filter returns an array that qualifies the condition tested
in the function argument. 
- The array filter returns can vary
in length (unlike the map function that that returns an
array with the same length as the original)

Test conditions:
the function filter
    filters an array based on evens
    filters an array based on odds
    should not use Array.prototype.filter
*/
const filter = (inputArray, callback) => {
    let outputArray = [];
//    for (let i = 0; i < inputArray.length; i++)
    for (let i in inputArray)
        callback(inputArray[i]) ? outputArray.push(inputArray[i]) : 0;
    return outputArray;
}

/* 
Re-Implement the Array.prototype.includes method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

Test conditions:
the function includes
    should return true if a collection includes a user-specified value
    should return false if a collection does not contain a user-specified value
    does not call Array.prototype.reduce
*/

const includes = (inputObject, testCond) => {
    for (let i in inputObject) {
        if (inputObject[i] === testCond) return true;
    }
    return false;
}

/*
Implement coundWords

Test conditions:
the function countWords is a utility function we'll need soon
    the first argument is the starting value of the total count
    counts words in a sentence separated by empty space
*/

const countWords = (startingVal, sentence) => {
    return sentence.split(' ').length + startingVal;
}

/*
reduce takes a collection and combines/accumulates the values in the collection to a single value 
(the final value could be a string, number, object, etc...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Test conditions:
the function reduce
    sums up the array
    counts the number of words in an array of strings
    should not use Array.prototype.reduce
*/

const reduce = (inputArray, startingVal, callback) => {
    let output = startingVal;

    inputArray.forEach(i => {
        output = callback(output, i);
    });
    return output;
}

/*
... Use reduce inside a sum function that takes an array of integers

Test conditions: 
the sum function
    uses reduce to add up the numbers in an array
*/

const sumCallback = (output, nextItem) => nextItem + output;
const sum = (inputArray) => reduce(inputArray, 0, sumCallback);

/*
  These next two are very tricky!
  The functions every and any **should use the reduce function you created earlier**
  to combine the collections into a true or false value.

  // `every` tests if every element in this array passes the condition in the function
  // If all the values pass the condition, `every` returns `true`
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

Test conditons:
the function every
    should handle an empty set
    should handle a set that contains even numbers
    should handle a set that contains an odd number
    should not use Array.prototype.every or Array.prototype.reduce
*/

// must create a callBack that is passed into the reduce logic containing a forEach

const every = (inputArray, callback) => {
    const andCallback = (output, nextItem) => output && callback(nextItem);
    return reduce(inputArray, true, andCallback);
}

const some = (inputArray, callback) => {
    const orCallback = (output, nextItem) => output || callback(nextItem);
    return reduce(inputArray, false, orCallback);
}
