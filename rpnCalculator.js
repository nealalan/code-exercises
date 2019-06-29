/* eslint-disable no-unused-vars, no-throw-literal, linebreak-style*/

function RPNCalculator () {
    this.numbers = [];
}
// add the number to numbers
RPNCalculator.prototype.push = function(num) {
    this.numbers.push(num);
}
// return the value stored in numbers
RPNCalculator.prototype.value = function() {
    return this.numbers[0];
}
// create a function to pull both numbers stored
RPNCalculator.prototype.getBoth = function() {
    if (this.numbers.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    let a = this.numbers.shift();
    let b = this.numbers.shift();
    return {a, b};
}
// remove both numbers and add them
RPNCalculator.prototype.plus = function() {
    let {a, b} = this.getBoth();
    this.numbers.push(a + b);
}
// remove both numbers and subtract
RPNCalculator.prototype.minus = function() {
    let {a, b} = this.getBoth();
    this.numbers.push(a - b);
}
// multiple using 'times'
RPNCalculator.prototype.times = function() {
    let {a, b} = this.getBoth();
    this.numbers.push(a * b);
}
// divide (i guess we don't care about remainders?)
RPNCalculator.prototype.divide = function() {
    let {a, b} = this.getBoth();
    this.numbers.push(a / b);
}
