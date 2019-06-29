/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */


const createCalculator = () => {
    return {
        currentValue: 0,
        value () {
            return this.currentValue;
        },
        add (x) {
            this.currentValue += x;
        },
        subtract (x) {
            this.currentValue -= x;
        },
        clear () {
            this.currentValue = 0;
        },
    };
}

// what.... the input array is an array of objects that needs a new function :^O
const addSquareMethod = (arrayOfObjects) => {
    // take the array apart one piece at a time
    return arrayOfObjects.map(
        // given calcObj add a new function; return the calcObj
        calculatorObject => {
            calculatorObject.square = function () { return this.currentValue * this.currentValue; }
            return calculatorObject;
        }
    );
}

//const createHumanCalculator = createCalculator();
//createHumanCalculator creates an instance using Object.create and the instance has a total property

/*const createHumanCalculator = () => {
    let output = Object.create(createCalculator);
    output.total = -10;
    output.currentValue = -10;
    
    return output;
}*/

const humanCalcPrototype = {
    total: -10,
    value () {
        return this.total;
    },
    add (x) {
        this.total += x;
    },
    subtract (x) {
        this.total -= x;
    },
    clear () {
        this.total = -10;
    },
  };

  const createHumanCalculator = () => Object.create(humanCalcPrototype);
