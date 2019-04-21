/* ARRAYS -/- FRI, APR 19, 2019v*/

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
console.log("\nnames.reverse() reverses and returns the reverse: " + names.reverse());
console.log("\narray names: " + names);
