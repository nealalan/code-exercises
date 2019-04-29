/*
MAD LIBS
*/

let madLibs = (string = '', array = []) => {
    let arrayLibs = string.split('*');
    let newLibs = [];

    for (let i = 0, j = 0; i <= arrayLibs.length; i++, j++) {
        newLibs.push(arrayLibs.shift());
        // if the array contains less replacements than the input '*'
        //  reduce the array index down to a factor of the array length
        if (array[i] === undefined) newLibs.push(array[i % array.length]);
        else newLibs.push(array[i]);
    }
    return newLibs.join('');
}

console.log(madLibs('1 * 2 * 3 * 4 * 5 *', ['A','B']));