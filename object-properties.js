/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */


/* `setPropsOnObj is a function you need to define and create in `properties.js`.
The variable `object` is passed to the setPropsOnObj function and adds properties
on to the argument (which is an object literal).
*/
const setPropsOnObj = (inObject) => {
    inObject.x = 7;
    inObject.y = 8;
    inObject.onePlus = (x) => x + 1;
}

/* Let's explore the idea of using Arrays instead of Object Literals.
A great feature of JavaScript is that Arrays are a special
type of Object.  Everything that you can do
with objects, you can also do with arrays.
*/

const setPropsOnArr = (inArray) => {
    inArray[0] = 5;
    inArray.hello = () => 'Hello!';
    inArray.full = 'stack';
    inArray.twoTimes = (x) => x * 2;
}

/* Functions are also Objects! Functions and Arrays
have the same features as Object Literals. You can add properties to them, 
pass them to functions as arguments, and return them as values from functions.
*/

const setPropsOnFunc = (inFunc) => {
    inFunc.year = '20??';
    inFunc.divideByTwo = (x) => x / 2;
}

const shallowCopy = (in1, in2) => Array.isArray(in1) ? in1.concat(in2) : { ...in1, ...in2 }; 
