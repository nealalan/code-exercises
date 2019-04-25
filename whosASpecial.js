/*

Who's a Special?
Write a function whosASpecial that takes an array of pets and returns 
a string confirming what you already knew: all of the pets are very 
special! Feel free to add your own special pets to the array!

Use .forEach in your answer.
*/

const whosASpecial = (array) => {
    let output = '';
    array.forEach(element => {
        if (output !== '') output += ' ';
        output +=`${element.name} the ${element.species} is very special!`;
    });
    return output;
}
// another way of doing this is to push all to an array and .join with ' '

// TEST CONDITIONS
let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

console.log(whosASpecial(specialPets));
// => Sadie the cat is very special! Layla the cat is very special! 
//Bogie the dog is very special!