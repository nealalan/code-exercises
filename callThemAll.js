/*
Call Them All
Write a function callThemAll, that, given an object and a value, calls every 
method in the object, passing in the value as the argument with each call.

callThemAll should return an array with all of the returned values from each 
method invocation. The order of the elements in the returned array does not 
matter.
*/


const callThemAll = (inputObject, inputValue) => {
    let outputArray = [];
    for (let key in inputObject) {
        //console.log(key + " is a " + typeof inputObject[key]);
        if (typeof inputObject[key] === "function") {
            //console.log(inputObject[key](inputValue));
            outputArray.push(inputObject[key](inputValue));
        }
    }
    return outputArray;
}



// TEST CONDITIONS
let addsNums = {
  addTen: function(num) {
    return num + 10;
  },
  addTwenty: function(num) {
    return num + 20;
  },
  someProperty: 'value'
};

console.log(callThemAll(addsNums, 100)); // => [110, 120]