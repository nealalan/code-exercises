


// Complete the funnyString function below.
const funnyString = s => {
    // loop through half way (finding if the first half matches)
    for (let i = 0; i < s.length / 2; i++) {
        // grab the start set
        let s1 = s[i].charCodeAt(0);
        let s2 = s[i + 1].charCodeAt(0);
        // grad the end set
        let e1 = s[s.length - i - 1].charCodeAt(0);
        let e2 = s[s.length - i - 2].charCodeAt(0);
        // if the set differences don't match, return
        if (Math.abs(s1 - s2) !== Math.abs(e1 - e2)) return 'Not Funny';
    }
    // never encounted a set that didn't match, so return 
    return 'Funny';
  }

// TEST CONDITIONS

console.log(funnyString('accxxz')); // funny
console.log(funnyString('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'));
console.log(funnyString('abnz')); // not funny