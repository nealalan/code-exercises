// VOWEL COUNT

let vowelCount = (input) => {
    let output = 0;
    //test for the base case
    if (input.length === 0) return 0;

    // Non-recursively, WITHOUT USING REGEX.... (/^[aeiouy]$/i).test
    //    GRR YOU MUST ADD CAPS!!!!!
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'A' ||
            input[i] === 'e' || input[i] === 'E' ||
            input[i] === 'i' || input[i] === 'I' ||
            input[i] === 'o' || input[i] === 'O' ||
            input[i] === 'u' || input[i] === 'U' ||
            input[i] === 'y' || input[i] === 'Y') 
            output++;
    }

    return output;
}

// TEST CONDITIONS
// => 32
console.log(vowelCount('It was the best of tirme, it was the worst of time, it was the age of wisdom, it was the age of foolishness')); 