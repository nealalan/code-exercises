// note: you need define the parameters in the function if needed

function palindrome(inputStr = '') {
    //console.log(inputStr);
    // compare the start and end value until the midpoint is reached
    for (let i = 0, j = inputStr.length-1; i <= j; i++, j--) {
        // if any letters aren't equal, it's not a palindrome
        if (inputStr[i] !== inputStr[j]) return false;
    }
    return true;
}


module.exports = palindrome;

/*
console.log(palindrome("racecar"));
console.log(palindrome("animal"));
*/