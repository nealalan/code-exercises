// note: you need define the parameters in the function if needed

function myFilter(inputArray, callback) {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (callback(inputArray[i])) outputArray.push(inputArray[i]);
    }
    return outputArray;
}

module.exports = myFilter;

//TEST CONDITIONS
/*var arr = [1,2,3,4,5];

function isEven(num) {
  return num % 2 === 0;
}
console.log(myFilter(arr, isEven));
console.log(myFilter(arr, function(num) { return !isEven(num); }));
*/