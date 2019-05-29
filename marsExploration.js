/*
2019-05-28

https://www.hackerrank.com/challenges/mars-exploration/problem

*/

// Complete the marsExploration function below.
function marsExploration(s) {
    let errors = 0;
    for (let i = 0; i < s.length; i += 3) {
        let currentSet = s.slice(i, i+3);
        currentSet[0] === 'S' ? null : errors++;
        currentSet[1] === 'O' ? null : errors++;
        currentSet[2] === 'S' ? null : errors++;
    }
    return errors;
}

// TEST CONDITIONS

console.log(marsExploration('SOSSOSSOSSOS'), '= 0');
console.log(marsExploration('WOSWOSWWWSOS'), '= 5');