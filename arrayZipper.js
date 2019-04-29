/* 
Array Zipper Method
- takes two parms - arrays
- array_zipper(arr1, arr2) should "zip" the two array together and return the result
- create a new array containing alternating elements from each of the input
- begin with the longer array or 1st array if they are the same length
- end when you need to add an element from an array that has run out
- if the longer array is more 1 item longer, only add 1 additional item from
    the longer array
*/

let arrayZipper = (array1, array2) => {
    let newArray1 = newArray2 = outputArray = [];
    let length = 0;

    // arrange the arrays so the longer one is first
    //  set length so it will handle the longer array
    if (array1.length < array2.length) {
        newArray1 = array2.slice();
        newArray2 = array1.slice();
        length = array1.length +1;
    } 
    else if (array2.length < array1.length) {
        newArray1 = array1.slice();
        newArray2 = array2.slice();
        length = array2.length +1;
    } 
    else {
        newArray1 = array1.slice();
        newArray2 = array2.slice();
        length = array1.length;
    }
    console.log('length to use:',length);

    for (let i = 0; i < length; i++) {
        // one array maybe longer than the other, check for undefined
        // pull the first item of the array off and add it to the output
        if (newArray1[0] !== undefined)
            outputArray.push(newArray1.shift());
        if (newArray2[0] !== undefined)
            outputArray.push(newArray2.shift());
    }
    return outputArray;
}

// TEST CONDITIONS
// array2 is way longer so output => ['a', 1, 'b', 2, 'c', 3, 'd']
console.log(arrayZipper([1,2,3],['a','b','c','d','e','f'])); 
// array1 is way longer so output => ['a', 1, 'b', 2, 'c', 3, 'd']
console.log(arrayZipper(['a','b','c','d','e','f'],[1,2,3])); 
// same len => [10, 11]
console.log(arrayZipper([10],[11]));