// note: you need define the parameters in the function if needed
function vowelsCount(inputStr = '') {
    let outputCount = 0;
    //  base case
    if (inputStr.length === 0) return 0;
    // if it's a vowel, add the the count
    if ((/^[aeiouy]$/i).test(inputStr[0])) outputCount += 1;
    // call recursively, passing what hasn't been checked 
    // add return values together
    outputCount += vowelsCount(inputStr.slice(1));

    return outputCount;
}

module.exports = vowelsCount;


/*
console.log(vowelsCount());
console.log(vowelsCount('dog'));
*/