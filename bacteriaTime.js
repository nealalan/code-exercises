/*
Bacteria Time: Define a function, bacteriaTime, that accepts two arguments:

currentNum (num) - number of starting bacteria
targetNum (num) - desired number of bacteria
Assuming that the number of bacteria double every 20 minutes, bacteriaTime should return the number of minutes required for the number of bacteria to grow from the currentNum to a number equal to or larger than the targetNum.

You can assume the currentNum will be a positive integer. If the targetNum is smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.

bacteriaTime(1, 8); // => 6
*/

const bacteriaTime = (currentNum, targetNum = 0) => {
    if (targetNum < currentNum) return 'targetNum must be larger than currentNum';
    let outputTime = 0;
    // double the population (currentNum) until it's => targetNum
    // add 20 min to the time
    for (;currentNum < targetNum; currentNum += currentNum, outputTime += 20);
    return outputTime;
}

console.log("should be 60:    " + bacteriaTime(1, 8));
console.log("should be 220:   " + bacteriaTime(3, 6000));
console.log("should be error: " + bacteriaTime(100, 50));