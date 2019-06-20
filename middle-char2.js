// note: you need define the parameters in the function if needed

function getMid(inputStr = '') {

    if (inputStr.length % 2)
        // odd returns a mod of 1, indicating only 1 middle letter
        return inputStr[(inputStr.length/2)-.5];
    else 
        return inputStr[(inputStr.length/2)-1] + inputStr[(inputStr.length/2)];

}

module.exports = getMid;

/*
console.log('best', getMid("best"));
console.log('beast', getMid("beast"));
console.log('a', getMid("a"));

console.log('variable', getMid("variable"));
*/