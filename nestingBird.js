/* 
flatten out an array of nested arrays to a string
*/

let nestingBird = (array) => {
    let outputString = '';

    for (let i = 0; i < array.length; i++) {

        if (Array.isArray(array[i]))
            outputString += nestingBird(array[i]);
        else {
            console.log("add:", array[i]);
            outputString += array[i];
        
        }
    }

    return outputString;
}
console.log('output:', nestingBird(['r','o',['b',['i'],'n']]));
console.log('output:', nestingBird([['P','t'],'e',['o',['d',['a'],'c','t',['y','l']]]]));
 