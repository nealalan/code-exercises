// note: you need define the parameters in the function if needed

function underToCamel(inputStr) {
    
    for (let i = 0; i < inputStr.length; i++) {
        // user Regex to capture two chars: an underscore and following char
        //   those two chars are passed to a function that returns only
        //   the second char converted toUpperCase (unless it is a number)
        //   Note: Would have to add additional checks to the function if we
        //         didn't assume there is always a char after the underscore!
        inputStr = inputStr.replace(/\_[a-zA-Z0-9]/g, 
                                    (x) => { return x[1].toUpperCase(); });   
    }
    return inputStr;
}

module.exports = underToCamel;

/*
console.log(underToCamel("my_income_tax_from_2015"));

*/