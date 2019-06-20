/*
| | | ABC | | DEF | | 1 | | 2 | | 3 |
| GHI | | JKL | | MNO | | 4 | | 5 | | 6 |
|PQRS | | TUV | | WXYZ| | 7 | | 8 | | 9 |
*/

var keypad = {A: 1, B: 2, C: 3, D: 1, E: 2, F: 3, G: 1, H: 2, I: 3, J: 1, K: 2, L: 3,
              M: 1, N: 2, O: 3, P: 1, Q: 2, R: 3, S: 4, T: 1, U: 2, V: 3, W: 1, X: 2,
              Y: 3, Z: 4, ' ': 1, '1': 1, '2': 1, '3': 1, '5': 1, '6': 1, '7': 1,
             '8': 1, '9': 1};
            // ASSUMPTION: 
            // back then, I think the numbers were AFTER you cycled through the letters,
            //   but that doesn't match the test conditions?!?!


const presses = (inputString) => {
    let count = 0;
    // convert input to UPPER CASE
    inputString = inputString.toUpperCase();

    for (let i = 0; i < inputString.length; i++) 
        count += keypad[inputString[i]];  

    return count;
}

//console.log(presses('HeLlO'));
//console.log(presses('I am traveling to Chicago and staying on 1st street'));