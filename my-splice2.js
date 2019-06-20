// var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// a different approach i took that didn't consider the actual logic in Array.splice

function mySplice(inputArray, start = 0, deleteCount = inputArray.length, ...items) {
    // create new empty arrays and copy the input
    let inputArrayCopy = [];
    let newArray = [];
    let deletedItems = [];
    inputArrayCopy = inputArrayCopy.concat(inputArray);

    // if we are passed values, assume the start didn't offset the index by -1
    if (start) start--;
    //if (deleteCount) deleteCount--;

    // slice off the deleted items
    //let deletedItems = (inputArray.slice(start, start + deleteCount +1));
    // Note: MODIFY inputArray when deleting or adding
    for (let i = 0; i < inputArray.length; i++) {
        if (i <= start || i > start + deleteCount) {
            console.log('keep: idx', i, 'val', inputArrayCopy[0]);
            newArray = newArray.concat(inputArrayCopy.shift());
        } 
        else {
            console.log('dele: idx', i, 'val', inputArrayCopy[0]);
            deletedItems = deletedItems.concat(inputArrayCopy.shift());
        }
    }
    console.log('new', newArray);
    console.log('del', deletedItems);

    // clear the inputArray, then move the newArray to the inputArray
    while (inputArray.length) inputArray.pop();
    while (newArray.length) inputArray.push(newArray.shift());
    

    // returns the deleted elements, not the modified array!
    return deletedItems;
}

//module.exports = mySplice;

//TEST CONDITIONS
var arr = [1,2,3,4];
console.log('return code:', mySplice(arr, 1));
console.log('arr updated:', arr);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('return array:', mySplice(array, 2, 4));
console.log('arr updated:', array);
