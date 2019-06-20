
/*
Write a function that will use the .reduce() method to find the 
frequency of strings in an array. Your function, strFrequency, takes 
an array of strings, some strings occurring multiple times, and 
returns an object that specifies how many times each string occurred 
in the array.
*/
/*function strFrequency(inputArray) {

    return inputArray.reduce((returnObject, element) => {
        if (!returnObject[element]) return returnObject[element] = 1;
        else return returnObject[element] += 1;
    },{});
}*/

function strFrequency(stringArr) {
    return stringArr.reduce(function(obj, elem) {
      if (obj[elem]) {
        obj[elem]++;
      } else obj[elem] = 1;
  
      return obj;
    }, {});
}

module.exports = strFrequency;
