/*

My Splice
Write a 'mySplice' function that mirrors the behavior of JavaScript's 
.splice() array method. However, mySplice should accept the array to 
operate on as an argument, rather than being invoked as a method on 
that array.

mySplice only needs to take one element to add to the array (the .splice 
method can actually take any number of values to add).

Do not use .splice in your function.
*/

const mySplice = (inputArray, startIdx = 0, delCount = 0, addItem = null) => {
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
    if (addItem) inputArray.unshift(addItem);
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

    return deletedItems;
}



// TEST CONDITIONS
let myArray = [1, 2, 3];
console.log(mySplice(myArray, 1, 1, 'apples')); // => [2]
console.log(myArray);    // [1,'apples', 3]

let ourStuff = ['food', 'trash', 'clothes'];
console.log(mySplice(ourStuff, 1, 1)); // ['trash']
console.log(ourStuff);  // ['food', 'clothes']

let funNums = [10, 20, 30, 40, 50, 60];
console.log(mySplice(funNums, 2, 3));
console.log(funNums); // [10, 20, 60]);

let ourStuff2 = ['food', 'trash', 'clothes'];
console.log(mySplice(ourStuff2, 1, 1, 'more food'));
console.log(ourStuff2); // ['food', 'more food', 'clothes']);

let ourStuff3 = ['food', 'trash', 'clothes'];
console.log(mySplice(ourStuff3, 1, 0, 'more food'));
console.log(ourStuff3); // ['food', 'more food', 'trash', 'clothes']);