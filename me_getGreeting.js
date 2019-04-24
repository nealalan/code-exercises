/*
Say My Name
Define an object, me, that has a name property and a getGreeting method. 
getGreeting should return a greeting.

*/

let me = {
    name: 'Kat',
    getGreeting: function() {
        return `Hi, my name is ${this.name}.`;
    }
}


console.log(me.name); // 'Kat'
console.log(me.getGreeting()); // => 'Hi, my name is Kat.'