/* ARRAYS -/- FRI, APR 19, 2019v*/

// clear the console:
console.log('\x1Bc');

let names = ["George", "John", "Scott", "Nimit"];
console.log("typeof names = and object (arrays are objects): " + typeof names);

 // Arrays.isArray = method to check if a var is an array
console.log("\nArray.isArray(names) = Bool true: " + Array.isArray(names));
console.log("Array.isArray(names[0]) = Bool false: " + Array.isArray(names[0]));
console.log("names[names.length-1] will access the last item: " + names[names.length-1]);
// .push method
console.log("\nnames.push(\"Jane\") will add to the end of the array and return the index: " + names.push("Jane"));
// .pop method
console.log("names.pop() will return the item removed from the array: " + names.pop());
// .shift method
console.log("\narray names: " + names);
console.log("names.shift() will return the first item removed from the array: " + names.shift());
// .unshift method
console.log("\narray names: " + names);
console.log("\nnames.unshift('George') will add as the first item and return the length: " + names.unshift('George'));
// .indexOf method
console.log("names.indexOf('Jack') will return a -1:" + names.indexOf('Jack'));
//   a common usage for a search is 
let person = "Jack";
if (names.indexOf(person) === -1) console.log(person + " not found.");
// .slice method = creates a copy of the array
console.log("\narray names: " + names);
console.log("names.slice(1,3) will return the selected indexes" + names.slice(1,3));
// .includes method
console.log("\nnames.includes(person) will return a Boolean" + names.includes(person));
// .reverse method
console.log("\n.REVERSE METHOD");
console.log(" names.reverse() reverses and returns the reverse: " + names.reverse());
console.log(" array names: " + names);
// .splice method - more powerful and more dangerous 
//  - changes the passed array - doesn't create a new one
//  - retuns the deleted elements
console.log("\n.SPLICE METHOD = array.splice(startIdx, removeCount, ...addInPlace)");
let alpha = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(" before splice: " + alpha + "\n splice(2,3,\"insert\") return: " + alpha.splice(2,3,"insert") + "\n after splice: " + alpha);
// .join method
console.log("\n.JOIN METHOD = returns array merged with what's passed");
console.log(" join alpha with dashes: " +  alpha.join('--'));
console.log(" join alpha merged: " + alpha.join(''));
// .concat method 
console.log("\n.CONCAT METHOD = use this to add together versus .push that adds only an item");
console.log(" concat numbers and letters: " + [1, 2, 3].concat('A', 'B', 'C'));
// MULTI-DIMENSIONAL ARRAY
console.log("\nMULTI-DIM ARRAY EXAMPLE");
let anArray = ['stuff', ['A','B','C'],['1','2','3'],['smiley','eggplant','shrug','no smoking']];
console.log(anArray);
for (let i = 0; i < anArray.length; i++) {
    let element = anArray[i];
    if (Array.isArray(element)) {
        for(let j = 0; j < element.length; j++) console.log("sub-element: " + element[j]);
    }
    else console.log("element: " + element);
}

console.log("\nGRID EXTRACTION");
let grid = [[1,2,3],[4,5,6],[7,8,9],[0,'A','B'],['C','D','E']];
console.log(grid);
console.log("easy to access rows using grid[], but not easy to access column")
let theCol =[];
for (let i = 0; i < grid.length;i++){
    theCol.push(grid[i][1]);
}
console.log(theCol);