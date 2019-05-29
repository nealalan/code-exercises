/*

*/

// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    const hackerrank = 'hackerrank';
    
    for (let h = 0, i = 0; i < s.length; i++) {
        if (hackerrank[h] === s[i]) h++;
        // if at the end of input s and not at the end of hackerrank
        if (i === s.length -1 & h !== hackerrank.length) return 'NO';
    }
    return 'YES';

}

// TEST CONDITIONS
console.log('TRUE', hackerrankInString('hackerrank'));
console.log('TRUE', hackerrankInString('hackerrannk'));
console.log('FALSE', hackerrankInString('hackerrann'));
console.log('TRUE', hackerrankInString('hhhhackerrankkkk'));
console.log('FALSE', hackerrankInString('dog'));
console.log('FALSE', hackerrankInString('hakerrannk'));
