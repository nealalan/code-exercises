// var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// updated the first mySplice I did and updated the addItem. Unfortunately it
//   doesn't reflect the actual logic in Array.splice that deletes everything
//   under some conditions

const mySplice3 = (inputArray, startIdx = 0, delCount = 1, ...addItem) => {
    let startItems = [];
    let deletedItems = [];

    // at start, remove and store items before the startIdx if they exist
    for (let i = 0; i < startIdx; i++) {
        // this will always be the 0th index
        let item = inputArray.shift();
        // this will keep the "before" item(s)    
        startItems.push(item);        
    }
    //console.log("Start: " + startItems);
    // hit the startIdx, 
    //  remove and store items deleted
    for (let i = 0; i < delCount; i++) {
        let item = inputArray.shift();
        deletedItems.push(item);
    }
    //console.log("Del: " + deletedItems + " input: " + inputArray);
    // put the addItem in at the beginning
    if (addItem.length > 0) 
        for (let i = addItem.length -1; i >= 0; i--) 
            inputArray.unshift(addItem[i]);
    //console.log(" add: " + addItem + " input: " + inputArray);

    // add back the number of startItems
    //  starting at the end 
    // not too sure why this doesn't work with just the length...
    for (let i = 0; i < startItems.length+1; i++) {
        //console.log("startItems: " + startItems);
        let item = startItems.pop();
        inputArray.unshift(item);
    }
    //console.log("Add: " + deletedItems + " input: " + inputArray);

    inputArray.flat();
    return deletedItems;
}



//module.exports = mySplice;

//TEST CONDITIONS
var arr = [1,2,3,4];
console.log('return code:', mySplice3(arr, 1));
console.log('arr updated:', arr);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('return array:', mySplice3(array, 2, 4, 9, 10, 11));
console.log('arr updated:', array);
