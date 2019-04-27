/*
Count Vowels
Write a function, countVowels, that accepts a string and returns the number of vowels in that string. Use recursion.
*/

let countVowels = (str='') => {
    let vowelCount = 0;
    // add a condition to prevent infinte recursion
    if (!str.length) return 0;
    // test the first/current letter in the string
    //   regex condition to test: /^[aeiou]$/i
    if ((/^[aeiou]$/i).test(str[0])) vowelCount++;
    // slice off everything after the first char and pass it in 
    return vowelCount += countVowels(str.slice(1));

}

console.log(countVowels());
console.log(countVowels('Four score and seven years')); // => 9
console.log(countVowels('life is like a box of chocolates')); // 12