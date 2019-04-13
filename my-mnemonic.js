/*
Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

Note that the user may not pass in all four strings!

myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
myMnemonic('We', 'Eat', 'Eggs'); // => WEE
*/

// use the "rest operator" 
const myMnemonic = (...strings) => {
  let output = ;
  //console.log(strings.length, strings);
  for (let x = 0; strings.length > x && x < 4; x++) output = output + strings[x][0];
  return output;
}
