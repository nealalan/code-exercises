/*
Say Your Name
Create a new object, me2. Expand the myGreeting method from me so it 
accepts another object with a name property. The returned greeting should 
now greet the other object by name.
*/

let me2 = {
    name: 'Kat',
    getGreeting: function(inputObject) {
        return `Hi ${inputObject.name}, my name is ${this.name}.`;
    }
}

let you = {
    name: 'Alyssa'
}

console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
console.log(me2.getGreeting(you)); // => 'Hi Alyssa, my name is Tarana.'
