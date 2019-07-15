/* eslint-disable no-loop-func */
// NEAL DREHER 2019-07-13
/* eslint-disable no-unused-vars */
/*
### Map Quest
You are using an app called map quest to help you get to your destination. 
`mapQuest` accepts directions and suggestions from their user base, but 
sometimes, their user base doesn't suggest the best directions.

Here is what your directions may look like:
`['N', 'W', 'S', 'E', 'N']`
- 'N' - 'north'
- 'S' - 'south'
- 'E' - 'east'
- 'W' - 'west'

Sometimes the suggested directions have a lot of extra traveling, e.g.
`['N',S',E','W','N']`

The directions make you travel North, then immediately back South, leaving you
right where you left off! Also, then you move East, then back West! 

Your task is to create the function `mapQuest` that identifies redundancies and 
unreasonable directions and create a better route. For example, if these were 
the directions submitted by a user:

`['N', 'S', 'W', 'E', 'S']`

In this example, the suggestion to go 'N' then 'S' right away is a waste of time. 
Right after, you are instructed to go 'W' then 'E,' this is also a waste :); 
finally, you are left with simply traveling 'S.' The value returned should be ['S'].

Here is another example:
`['S', 'N', 'N', 'E', 'W', 'S']`

- 'S' and 'N' are directly opposite of each other, so they are removed from the 
    directions. (updates to `['N', 'E', 'W', 'S']`)
- 'N' and 'E' stays (for now)
- 'E' and 'W' are opposite of each other, so they are removed from the directions. 
    (updates to `['N','S']`)
- Now, we need to compare what is left in the directions array. `['N','S']`
-  'N' and 'S' are opposite of each other, they are removed, and the remaining 
    directions array is empty. updates to `[]`

The function `mapQuest` takes an array of strings and reduces the additional 
directional points in the array based on the logic described above.

```js
mapQuest(['S', 'N', 'N', 'W', 'E', 'S', 'E']) // returns ==> ['E']
mapQuest(['N', 'S', 'S', 'E', 'W', 'N']) // returns ==> []
```
*/

const mapQuest = (inputArray) => {
    let shrunk = true;
    // We need to run through the logic multiple times to handle:
    //   1) the useless trips NS EW,
    //   2) the useless trips we create after removing the useless trips
    //   3) the additional useless trips we create that were double nested
    while (shrunk) {
        // if don't removing anything, we didn't shink, so quit loop!
        shrunk = false;
        inputArray = inputArray.reduce((accum, current, idx) => {
            if ((current + inputArray[idx + 1]) === 'NS' || 
                (current + inputArray[idx + 1]) === 'SN' || 
                (current + inputArray[idx + 1]) === 'EW' ||
                (current + inputArray[idx + 1]) === 'WE') {
                    inputArray[idx + 1] = '';
                    current = '';
                    shrunk = true;
            }
            // ANOTHER SOLUTION THAT REPLACE 'IF' WITH 'SWITCH-CASE'
            /*switch (current + inputArray[idx + 1]) {
                case 'NS':
                case 'SN':
                case 'EW':
                case 'WE':
                    inputArray[idx + 1] = '';
                    current = '';
                    shrunk = true;
                    break;
                default:
                    break;
            }*/
            // IF WE REMOVED A PAIR, this & next ARE '', SO ADD NOTHING
            //  IF WE DIDN'T REMOVE A PAIR, ADD THE CURRENT ITEM TO OUTPUT
            return (current === '') ? accum : accum.concat(current);
        }, []); // START WITH AN EMPTY ARRAY
    }
    return inputArray;
}

console.log(mapQuest(['S', 'N', 'N', 'W', 'E', 'S', 'E'])); // [ 'E' ]
console.log(mapQuest(['N', 'N', 'E', 'W', 'S', 'S', 'E', 'W', 'N', 'N', 'W', 'S', 'E'])); 
// [ 'N', 'N', 'W', 'S', 'E' ]
