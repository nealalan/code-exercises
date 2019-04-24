/* 
OBJECT = collection of key-valued pairs that also store values
- object indexes can be anything (versus arrays that start at zero)

OBJECT METHODS = action you perform on a value
*/

let cat = { 
    name: 'Dusty',
    age: 15,
    'hair color': ['black','white spot'],
    siblings: {
        brother1: "Tiger",
        brother2: "Coal"
    },
    sound: 'meow'
}
// reference index
console.log(cat['sound']); 
// reference object property
console.log(cat.sound); 
// the only way to access index with a space
console.log(cat['hair color']);
// add an object property and value
cat.owner = "Neal";
cat['eye color'] = "green";
// delete an object property and value
delete cat.sound;
// access nested objects
console.log(`cat.siblings.brother2 is ${cat.siblings.brother2}`);
console.log(`cat['siblings']['brother2'] is ${cat['siblings']['brother2']}`);

console.log(`\nCONTENTS OF OBJECT:`);
console.log(cat);

console.log(`\nCHECK FOR A KEY IN AN OBJECT:`);
if ('age' in cat) console.log(`cat age is ${cat.age}`);
else console.log(`cat age: not defined`);

console.log(`\nLOOP THROUGH ALL IN OBJECT`);
for (let key in cat) console.log(`his ${key} is ${cat[key]}`);

console.log(`\nRETURN ARRAY OF KEYS IN OBJECT:`);
console.log(Object.keys(cat));

console.log(`\nACCESS ALL IN A FOR LOOP USING KEYS ARRAY INDEX`);
// access all properties/keys into array keys, 
//  use the array of keys to access all the values
for (let keys = Object.keys(cat), i = 0; i < keys.length; i++)
    console.log(cat[keys[i]]);

// Object.entries

// Object.values


console.log('\nMAKE OWN METHOD');
// make a key hold a function instead of a primative type var
let me = {
    first: 'Neal',
    last: 'Alan',
    fullName: function() {
        console.log(this.first + " " + this.last)
    },
    fullNamePlus: function(middle) {
        return this.first + " " + middle + " " + this.last;
    }
}
me.fullName();
console.log(me.fullNamePlus("345345"));

let calculator = {
    total: 0,
    plus: function(num) {
       return this.total += num;
    },
    minus: function(num) {
        return this.total -= num;
    }
}
calculator.plus(5);
calculator.plus(5);
console.log(calculator.total);

