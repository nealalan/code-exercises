/*
Define a function doYouPlayTheTheremin that accepts a string as an argument. doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S. Otherwise, doYouPlayTheTheremin should return false.

doYouPlayTheTheremin('Griffin'); // => false
doYouPlayTheTheremin('Scott'); // => true
*/
// YOUR CODE BELOW

const doYouPlayTheTheremin = inputString => inputString[0] == 's' || inputString[0] == 'S' ? true : false;
