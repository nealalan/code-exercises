/*
Deeper Copy
Write a function, deeperCopy, that, unlike .slice, will deeply copy a 
two- dimensional array.
*/

const deeperCopy = (inputArray) => {
    let anotherArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        let item = inputArray[i];

        if (typeof item === 'object') {
            let array = [];

            for (let j = 0; j < item.length; j++) 
                array.push(item[j]);

            anotherArray.push(array);
        }
        else anotherArray.push(item);
    }

   // console.log(inputArray);
   // console.log(anotherArray);
    return anotherArray;

}

// TEST CONDITIONS
let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);
console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);
console.log(myArray); // [1, [2, 3, 4]]