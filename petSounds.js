/*
Pet Sounds: Write a function petSounds that takes an animal name and a 
country name.

Using the globally-defined animalNoises array, petSounds should return 
a sentence that explains which sound the animal makes in the given country.
*/

let animalNoises = [
    { 'dog': {
      'America' : 'Woof! Woof!',
      'Germany' : 'Wau Wau!',
      'England' : 'Bow wow!',
      'Uruguay' : 'Jua jua!',
      'Afrikaans' : 'Blaf!',
      'Korea' : 'Mong mong!',
      'Iceland' : 'Voff voff!',
      'Albania' : 'Ham!',
      'Algeria' : 'Ouaf ouaf!'
      }
    },
    { 'cat': {
      'America' : 'Meow',
      'Germany' : 'Miauw!',
      'England' : 'mew mew',
      'Uruguay' : 'Miau Miau!',
      'Afrikaans' : 'Purr',
      'Korea' : 'Nyaong!',
      'Iceland' : 'Kurnau!',
      'Albania' : 'Miau',
      'Algeria' : 'Miaou!'
      }
    },
    { 'chicken': {
      'America' : 'Cluck cluck',
      'Germany' : 'tock tock tock',
      'England' : 'Cluck Cluck',
      'Uruguay' : 'gut gut gdak',
      'Afrikaans' : 'kukeleku',
      'Korea' : 'ko-ko-ko',
      'Iceland' : 'Chuck-chuck!',
      'Albania' : 'Kotkot',
      'Algeria' : 'Cotcotcodet'
      }
    }
  ];

const petSounds = (inputAnimal, inputCountry) => {
    let outputAnimal = inputAnimal[0].toUpperCase() + inputAnimal.slice(1) + 's';
    // animalNoises is an ARRAY, so we have to LOOP THROUGH THE ARRAY
    for (let i = 0; i < animalNoises.length; i++) {
        if (inputAnimal in animalNoises[i]) {
            if (inputCountry in animalNoises[i][inputAnimal]) {
                return `${outputAnimal} in ${inputCountry} say ${animalNoises[i][inputAnimal][inputCountry]}`;
            }
            return `Country not found.`
        }
    }   
    return `Animal not found.`
}


console.log(petSounds('dog', 'Iceland')); // => Dogs in Iceland say Voff voff!
console.log(petSounds('cat', 'Korea')); // => Cats in Korea say Nyaong!