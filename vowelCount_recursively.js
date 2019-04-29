// VOWEL COUNT

let vowelCount = (input) => {
    let output = 0;
    //test for the base case
    if (input.length === 0) return 0;

    // check for what we are checking for
    if ((/^[aeiouy]$/i).test(input[0]))
        output += 1;
    
    // call recursively and add (nested) returns together
    output += vowelCount(input.slice(1));

    return output;
}

console.log(vowelCount('It was the best of time, it was the worst of time, it was the age of wisdom, it was the age of foolishness')); // => 3