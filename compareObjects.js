/*
Define a function, compareObjects, that accepts two objects as arguments.

compareObjects should return true if both objects have exactly the same 
key/value pairs. Otherwise, compareObjects should return false. Assume the 
objects are not nested.

compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
*/

const compareObjects = (input1, input2) => {
    let keys1 = Object.keys(input1);
    let keys2 = Object.keys(input2);

    for (let i = 0; i < keys1.length || i < keys2.length; i++) {
        console.log(keys1[i] + ":" + input1[keys1[i]] + " " + keys2[i] + ":" + input2[keys2[i]]);
        // check keys not equal 
        if (keys1[i] !== keys2[i]) return false; 
        // check values by key not equal
        if (input1[keys1[i]] !== input2[keys2[i]]) return false;
    }
    return true;
}
console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }));
console.log(compareObjects({ name: 'nick' }, { name: 'Nick' }));
console.log(compareObjects({ name: 'zeke', age: 12 }, { name: 'zeke', age: 12 }));