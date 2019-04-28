/*
Is Palindrome
A palindrome is a word that is spelled the same forward and backward. For 
example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while 
"MOTOR", "RUDDER", and "DOGGED" are not palidromes.

Write a recursive function, isPalindrome, to check if a string is a 
palindrome or not.
*/

let isPalindrome = (input = '') => {

    // don't check anything if the input is nothing
    if (input.length === 0) return;

    // do the first and last letters equal?
    // if not, return false
    if (input[0] !== input[input.length -1]) return false;

    // if so, remove the first and last letters and try again
    let newInput = input.slice(1,input.length-1);
    isPalindrome(newInput);
    // if we never returned false, it must be a palindrome
    return true;
}


console.log(isPalindrome('Kayak')); // => true
console.log(isPalindrome('NEVERODDOREVEN')); // => true
console.log(isPalindrome('Tacocat')); // => true
console.log(isPalindrome('SELFLESS')); // => false
console.log(isPalindrome());
