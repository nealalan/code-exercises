/*
Get Dog Breeder: Remember the dog breeder question from an earlier 
workshop? It assumed that the default name for a dog should be 'Steve', 
and the default age should be 0.

Define a function, getDogBreeder, that takes a default name and age, and 
returns a dogBreeder function. The returned dogBreeder function should 
use the default values defined when dogBreeder was called.

You can copy over the solution code from dogBreeder if you'd like.
*/

function getDogBreeder (setName, setAge) {
    // the initial getDogBreeder is used to SET the object values
    //  the result is a callback function that can be changed using
    //  the passed callback function
    return function (inputName = setName, inputAge = setAge) {

        if (typeof inputName === 'number') {
            inputAge = inputName;
            inputName = 'Rufus';
        }
        return {name: inputName, age: inputAge};
    }

}

// TEST COND
// these will set the initial values calling getDogBreeder
let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

// these will only use the callback function
console.log(puppyFarm('Olaf', 3)); // => {name: 'Olaf', age: 3};
console.log(puppyFarm(2)); // => {name: 'Snoopy', age: 2}
console.log(rescueShelter()); // => {'Odie', 3}