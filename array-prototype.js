/* eslint-disable no-extend-native */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/*
### Array.prototype

Just like you did in TestFirst, you are tasked once again to recreate a few 
`Array.prototype` methods. Here is the twist, you will actually replace 
(re-assign) your own version of the method to the Array.prototype method.

Here are a few thoughts to keep in mind when approaching the problem:

- When you call `arr.map((val) => console.log(val))`, how does the `.map` 
    method access the `arr` it is called on? (Hint: you got **this**!)
- Do not worry about optional arguments, focus on the callback function passed 
    to map/filter and the first argument passed to the callback function.

TEST CONDITIONS:
Array.prototype.map
    concatenates "!!" to the end of every mapped value
    calls Array.prototype.forEach
Array.prototype.filter
    concatenates "#" to the front of every filtered value
    calls Array.prototype.forEach
*/
Array.prototype.map = function(callback) {
    let array = [];
    // calls Array.prototype.forEach
    this.forEach((value, index) => {
        // concatenates "!!" to the end of every mapped value
        array.push(callback(value) + `!!`);
    }); 
    return array;
}
Array.prototype.filter = function(callback) {
    let array = [];
    // calls Array.prototype.forEach
    this.forEach((value, index) => {
        // concatenates "#" to the front of every filtered value
        if (callback(value)) array.push(`#` + value);
    });
    return array;
}