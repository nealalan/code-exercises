/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const name = 'Cody';
const loud = 'loud';

const dog = {
    // bark function returns 'ruff ruff!'
    bark: () => 'ruff ruff!',
    name,
    // computed properties
    [`${loud}Bark`]: () => bark().toUpperCase()
};

const { bark } = dog;


console.log(dog);
console.log(' returns:', dog.bark());
console.log(' returns:', bark);

