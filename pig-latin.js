// NEAL DREHER
// 2019-07-10
// https://github.com/nealalan/code-exercises/pig-latin.js

/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */

//- Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end.
//  If the vowel (2nd letter) is a `'u'` and the preceeding character is not a 
//  'q'`, `'u'` is considered a valid 'vowel'.

//- Rule 2: If a word begins with a consonant sound, move the consonant to the 
//  end of the word. Finish by adding an "ay" sound to the end of the word.

// TEST CONDITIONS:
// pigify
//     translates a word beginning with a vowel = apple - appleay
//     translates a word beginning with a consonant = banana - ananabay
//     translates a word beginning with two consonants = cherry - errychay
//     translates two words = eat pie - eatay iepay
//     translates a word beginning with three consonants = three - eethray
//     counts 'sch' as a single phoneme = school - oolschay
//     counts 'qu' as a single phoneme = quiet - ietquay
//     counts 'qu' as a consonant even when it's preceded by a consonant = 
//      square -aresquay
//     translates many words = the quick brown fox - ethay ickquay ownbray oxfay
///////////////////////////////////////////////////////////////////////////////
const pigify = (inputString) => {
    let inputArray = inputString.split(' ');
    const wordCount = inputArray.length;
    // the index to swap at can be overridden by the function caller
    const lettersSwap = (string, index = firstVowelIdx(string)) => 
        string.slice(index) + string.slice(0, index);

    for (let i = 0; i < wordCount; i++) {
        switch (true) {
            // CASE OF QU - MOVE QU, ADD AY
            case 'Qq'.includes(inputArray[i][0]) && 'Uu'.includes(inputArray[i][1]):
                inputArray[i] = lettersSwap(inputArray[i], 2) + 'ay';
                break;
            // CASE OF *QU - MOVE *QU, ADD AY
            // Note: This is accounted for in the test cond, not the "Rules"
            case 'Qq'.includes(inputArray[i][1]) && 'Uu'.includes(inputArray[i][2]):
                inputArray[i] = lettersSwap(inputArray[i], 3) + 'ay';
                break;
            // CASE OF CONSONANT - MOVE FIRST CONSONANTS, CONTINUE TO DEFAULT
            //  *use regex for fun to shorten using every letter*
            case /([B-DF-HJ-NPR-TV-XZb-df-hj-npr-tv-xz])/.test(inputArray[i][0]):
                // swap what's before the vowel to the end
                inputArray[i] = lettersSwap(inputArray[i]);     
            // CASE OF VOWEL OR MODIFIED CONSONANT - ADD AN -AY ONLY
            default:
                inputArray[i] += 'ay';
                break;
        }
    }
    return inputArray.join(' ');
}

// probably could use Array.reduce and make the accum the first index only
//   but that logic would probably look way more complex and overkill because we'd
//   need to check in each callback call if we had already found the first index,
//   where the for loop stops right when we find the first index
const firstVowelIdx = string => {
    let returnIdx = -1;
    for (let i = 0; i < string.length && returnIdx < 0; i++) {
        if ('AEIOUYaeiouy'.includes(string[i]))
            returnIdx = i;
    }
    return returnIdx;
}
