/* eslint-disable no-unused-vars */

/*

TEST CONDITIONS:
using map
    indexAndValue
        create the function indexAndValue that returns an array
        the array returned contains objects
        adds `value` and `index` properties to the object created for each index value in the array
        creates an object with value and index properties for multiple values in the array
        indexAndValue calls Array.prototype.map
    swapCase each word in an array of words
        create the method capitalize that takes a string and capitalizes the string
        the swapCase functions uses Array.prototype.map and calls the capitalize function on every other word
        swapCase calls Array.prototype.map (the map method)

INPUT: indexAndValue([22, 33, 44, 55])); 
OUTPUT: [ { index: 0, value: 22 }, { index: 1, value: 33 }, …]

*/

// creates an object with value and index properties for multiple values in the array

const indexAndValue = (inputArray) => {
    // import here that we return the return within the object returned...
    const objectCallback = (value, index) => { return { value, index } };
    return inputArray.map(objectCallback);
}

const capitalize = (i) => i.toUpperCase();

const swapCase = (inputString) => {
    let inputArray = inputString.split(' ');
    const oddUpperCallback = (item, index) => (index % 2) ? item : capitalize(item);
    return inputArray.map(oddUpperCallback).join(' ');
}

/*

TEST CONDITIONS:
using filter
    extensionSearch
    returns an array
    returns every file that matches the extension type passed as the first argument
    calls Array.prototype.filter

INPUT: extensionSearch('txt', ['hello.txt', 'hello.png', ...]);
OUTPUT: ['hello.txt', ...]
*/
const extensionSearch = (searchValue, searchArray) => {
    const searchCallback = (item) => item.includes(searchValue);
    return searchArray.filter(searchCallback);
}

/*
**** USING REDUCE, GET POPULATION ****
GIVEN: 
    arrayOfCountries (array of objects in format { name: '', population: 0 }) and 
    searchArray (a list of countries)
    reduce the arrayOfCountries down to the total population of countries in searchArray
    if the searchArray is empty, return all countries
    reduce starting value is 0
TOTALL MISSED THIS CONDITION:
  // If the second argument is an empty array ([]) as it is below, add the population off all the countries from the first argument
  //expect(getPopulation(arrayOfCountries, [])).toBe(2117902300); // the number returned is the total population of all the countries in the arrayOfCountries array.
TEST CONDITIONS:
using reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    getPopulation
    returns a number
    adds the population of all the countries included in the second argument array
    calls Array.prototype.reduce
*/
const getPopulation2 = (arrayOfCountries, searchArray) => {
    const searchCallback = (accum, item) => {
        console.log('\nitem', item.name, item.population);
        // if the country is in the search list or if search list is empty...
        if (searchArray.includes(item.name) || searchArray.length === 0) accum += item.population;
        console.log(' yes', accum);
        return accum;
    };
    return arrayOfCountries.reduce(searchCallback, 0);
}
// inline callback solution
const getPopulation = (arrayOfCountries, searchArray) => {
    return arrayOfCountries.reduce((accum, item) => {
        if (searchArray.includes(item.name) || searchArray.length === 0) {
            return accum + item.population;
        }
        return accum;
        }, 
    0);
}

/*
**** USING REDUCE REFACTOR OBJECT ****
FROM: {
        name: 'Bruce Wayne',
        alias: 'Batman',
        powerLevel: 50,
        universe: 'DC Comics',
        race: 'Human',
      },
TO: { Batman: {
        name: 'Bruce Wayne',
        alias: 'Batman',
        powerLevel: 50,
        universe: 'DC Comics',
        race: 'Human',
        },

TEST CONDITIONS
action hero reduce functions
    refactor superheroes
    keyifyArrayOfObjects refactors the superheroes array to an object with the alias as the 
        property(keys) and the value is the superhero object that has that alias
    uses the Array.prototype.reduce method
*/
const keyifyArrayOfObjects = (keyName, superheroes) => {
    const keyifyCallback = (accum, item) => {
        accum[item[keyName]] = item;
        //console.log('{', JSON.stringify(item[keyName]), ':', JSON.stringify(item), '\n');
        return accum;
    };
    return superheroes.reduce(keyifyCallback, {});
}

/*
TEST CONDITIONS:
powerLevelAverage
    returns a number value
    given an array of superheroes, return the average power level rounded to the nearest integer
    works with arrays of various sizes
    calls the Array.prototype.reduce method and does NOT call Array.prototype.map
*/
const powerLevelAverage = (superheroes) => {
    const powerLevelCallback = (accum, item) => {
        return accum + item.powerLevel;
    };
    // don't forget to 1) set the initial value, 2) round the final value
    return Math.round(superheroes.reduce(powerLevelCallback, 0) / superheroes.length);
}

/*
recreate map using reduce
    returns an array
    returns a mapped array (it applies the function argument to every value in the array and returns a new array)
    mapReduce uses Array.prototype.reduce and do NOT use Array.prototype.map

INPUT: mapReduce([1, 2, 3], val => { return val * 2; }); 
OUTPUT: [2, 4, 6]
*/
const mapReduce = (inputArray, callback) => {
    const mapCallback = (accum, item) => {
        accum.push(callback(item));
        return accum;
    };
    return inputArray.reduce(mapCallback, []);
}

/*
recreate filter using reduce
    returns an array
    returns a filtered array
    filterReduce uses Array.prototype.reduce and does not use Array.prototype.filter

INPUT:  filterReduce([1, 2, 3], val => { return val <= 2; }); 
OUTPUT: [1, 2]
*/
const filterReduce = (inputArray, callback) => {
    const filterCallback = (accum, item) => {
        if (callback(item)) accum.push(item);
        return accum;
    }
    return inputArray.reduce(filterCallback, []);
}

/*
HINT = METHOD CHAINING!!!!

TEST CONDITIONS
method chaining: inYourBudget
    returns an array
    takes a maximum item price and a list of items with prices and returns each item that matches or 
        is less than the max item price
    calls Array.prototype.filter and Array.prototype.map

INPUT: inYourBudget(100, [{ item: 'tv', price: 499 }, { item: 'monitor', price: 99 },]); 
OUTPUT: ['monitor']
*/
const inYourBudget = (budget, itemObjectArray) => {
    const filterCallback = (item) => item.price < budget;
    const mapCallback = (item, index) => item = item.item;
    // only map the items that are filtered
    return itemObjectArray.filter(filterCallback).map(mapCallback);
}

/*
method chaining: separateAndReturnNames
    separates the name property and creates "firstName" and "lastName" properties
    returns an array of either firstNames or lastNames based on the second argument
    the second argument represents what name (first or last) to return and the last argument 
        represents the maximum length of the name
    calls Array.prototype.map and Array.prototype.filter
TO BE:
superheroes = [
            {
              name: 'Bruce Wayne',
              firstName: 'Bruce',
              lastName: 'Wayne',
              alias: 'Batman',
              powerLevel: 50,
              universe: 'DC Comics',
              race: 'Human',
            },
*/

const separateAndReturnNames = (inputObject, returnProperty, returnPropertyMaxLen) => {
    const mapCallback = (item, index) => {
        // update the object in the array
        item.firstName = item.name.split(' ')[0];
        item.lastName = item.name.split(' ')[1];
        // map is returning and pushing modified object to a new array to pass
        return item;
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Syntax
    const filterCallback = (item, index) => {
        // in the scope is an array of the items
        const yesItem = item[returnProperty].length <= returnPropertyMaxLen;
        // filter is returning and pushing filtered objects to a new array to pass
        return yesItem;
    };
    const mapFilteredCallback = (item, index) => {
        // map is returning and pushing an object key value to a new array to pass/return to caller
        return item[returnProperty];
    };  
    // 1) map the name element to firstName and lastName
    // 2) filter the returnProperty (key) by the 3rd argument 
    // 3) extract the returnProperty value to a an array
    return inputObject.map(mapCallback).filter(filterCallback).map(mapFilteredCallback);
}

/*
TEST CONDITIONS:
"todo" list
    priorityTodoDuration - returns the total amount of minutes needed to complete high priority tasks
    calls Array.prototype.filter and Array.prototype.reduce

INPUT: 
todoList = [
        { name: 'Brush Teeth', duration: 2, priority: 'high' }, ...]

USE: priorityTodoDuration(todoList); 
OUTPUT: 572
*/

const priorityTodoDuration = (inputArray) => {
    const filterCallback = (item) => {
        //if (item.priority === 'high') return item;
        return item.priority === 'high';
    };
    const reduceCallback = (accum, item) => accum + item.duration;
    // REMEMBER, .reduce(callback, initialValue)
    return inputArray.filter(filterCallback).reduce(reduceCallback, 0);
}
