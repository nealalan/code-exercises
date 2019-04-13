'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // n = assume n is the actual count of socks, code will not represent invalid inputs
    //  example: 3, [3 4 3 4] will return 2 pairs, despite n representing 3 socks
    var count = 0;
    ar.sort();
    // subtract 1 from n because the last sock is never compared to the next sock
    for (var i = 0; i < n-1; i++) {
        // for condition not met, for will automatically move to next
        //  sock to determine if it's a match
        if (ar[i] === ar[i + 1]) {
            // current sock matches next sock
            count++;
            // skip next sock since it's allocated to current sock
            i++;
        }
    }
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
