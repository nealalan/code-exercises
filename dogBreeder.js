/*
Dog Breeder
Define a function, dogBreeder, that accepts up to two optional arguments:

name (string)
age (number)
dogBreeder should return an object that represents a new dog! 
If the user doesn't define a name, assume the dog's name is Steve. 
If the user doesn't define the dog's age, assume the dog's age is 0.
*/

const dogBreeder = (inputName = 'Steve', inputAge = 0) => {

    if (typeof inputName === 'number') {
        inputAge = inputName;
        inputName = 'Steve';
    }
    return {name: inputName, age: inputAge};
}
console.log(dogBreeder('Sam', 12));    // => {name: 'Sam', age: 12}
console.log(dogBreeder(15));    // => {name:'Steve', age: 15}
console.log(dogBreeder());