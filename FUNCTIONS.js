// HIGHER ORDER FUNCTIONS
// - take functions and return functions

let array = [];
// DECLARATIVE FUNCTION
function happy() {
    console.log('HAPPY!!!');
}
// EXPRESSION FUNCTION
// - assigns a var an anonymous function
let happy2 = function () {
    console.log('HAPPINESS?');
}
array.push(happy, happy);
array.push(happy);
console.log('\nPRINT THE ARRAY:');
console.log(array);

// HOW DO YOU CALL THE ARRAY WITH THE FUNCTIONS?
console.log('\nLOOP THROUGH CALLING ELEMENTS IN THE ARRAY:');
for (let i = 0; i < array.length; i++) {
    let element = array [i]; // each element in the array is a function
    element();
}

// function that take a function or return a function are called 
//  HIGHER ORDER FUNCTIONS
console.log('\nHIGHER ORDER FUNCTIONS:');
function saysHi(name) { console.log('Hi', name); }
function saysBye(name) { console.log('Bye', name); }
function callsName(name, sayHiOrBye) { sayHiOrBye(name); }

callsName('Neal', saysHi);
callsName('Neal', saysBye);

// ANONYMOUS FUNCTIONS
console.log('\nANONYMOUS FUNCTIONS:');
// function receiving an anon function 'passedInFunc'
function say(names, passedInFunc) {
    for (let i = 0; i < names.length; i++) 
        passedInFunc(names[i]);
}
let array2 = ['Jane','Mike','Neal','Bob'];
// function call containing an anon function
say(array2, 
    function (name) {
        console.log("Hey", name + '!');
    });
    

// FOR EACH - array method that accepts a callback as only arg
//  .forEach calls the callback for each element in the array
//    it passes the current element as the first arg of the callback
//    it passed the current index as the second arg of the callback
//    return value is undefined
console.log('\n.forEach ARRAY METHOD FUNCTIONS:');
let bridges = ['Brooklyn','Golden Gate','London'];
function outputWithIdx(string, idx) { 
    console.log(string, 'is at index', idx); 
}
// logWithIdx is receiving two args from .forEach  
bridges.forEach(outputWithIdx);
// Could we have used an anon function in the forEach parms?


// Composition / Piping in functional programming
