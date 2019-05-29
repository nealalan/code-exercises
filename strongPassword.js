/* #regex #Math.max 
2019-05-28

https://www.hackerrank.com/challenges/strong-password/problem

Louise joined a social networking site to stay in touch with her 
friends. The signup page required her to input a name and a 
password. However, the password must be strong. The website 
considers a password to be strong if it satisfies the following 
criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters 
are: !@#$%^&*()-+
She typed a random string of length  in the password field but 
wasn't sure if it was strong. Given the string she typed, can you 
find the minimum number of characters she must add to make her 
password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
*/

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let neededChars = 0;
    const min_chars_required = 6;

    // So, apparently, we only use the first n letters in the 
    //  passed string 'password'
    // Great example of poorly written/documented business reqs
    password = password.slice(0, n);

    //one digit.
    if (!(/[0-9]/).test(password)) neededChars++;

    //one lowercase English character.
    if (!(/[a-z]/).test(password)) neededChars++;

    //one uppercase English character.
    if (!(/[A-Z]/).test(password)) neededChars++;

    //one special character. The special characters are: !@#$%^&*()-+
    if (!(/[!@#$%^&*()\-+]/).test(password)) neededChars++;

    //length is at least 6 chars.
    /*if ((n < min_chars_required) & 
        ((min_chars_required - n) > neededChars))
            neededChars = min_chars_required - n;
    */
    //  really we are looking for the larger of the checks thusfar
    //  nested loop unnecessary, use Math.max
    return Math.max(min_chars_required - n, neededChars);
}
// TEST CONDITIONS
console.log('#Dog12', 'needs', minimumNumber(7,'#Dog12a'));
console.log('a', 'needs', minimumNumber(1,'a'));
console.log('aaaaaaa', 'needs', minimumNumber(7,'aaaaaaa'));
console.log('AUzs-nV', 'needs', minimumNumber(7, 'AUzs-nV'));
console.log('AUzs\\nV', 'needs', minimumNumber(7, 'AUzs\\nV'));


/* A BRILLANT ONE LINER SOMEONE ELSE DID
    but I find this too conveluded for production code... 
    more difficult to edit if something needs updated.

function minNumber(n, pass) {
    const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+"]/]
            .map(r => !r.test(pass))
            .filter(Boolean).length
    
    return Math.max(c,6-n);
}
*/