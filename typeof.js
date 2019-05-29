
const a = null;
const b = 1;
const c = ['a',1];
const d = false;
let e;
const f = {1: 'a'};
const g = "str";
const h = '';
const i = Symbol();

console.log('TYPEOF EACH VARIABLE:')
console.log('\nconst a = null;');
console.log(typeof a);
console.log('an oddity of js to call a null and object')
console.log('\nconst b = 1;');
console.log(typeof b);
console.log('\nconst c = [\'a\',1];');
console.log('an array is an object keyed by indexes')
console.log(typeof c);
console.log('\nconst d = false;');
console.log(typeof d);
console.log('\nlet e;');
console.log(typeof e);
console.log('\nconst f = {1: \'a\'};');
console.log(typeof f);
console.log('\nconst g = "str";');
console.log(typeof g);
console.log('\nconst h = \'\';');
console.log(typeof h);
console.log('\nconst i = Symbol();');
console.log(typeof i);
console.log('think of a symbol as a serial number - completely unique');


