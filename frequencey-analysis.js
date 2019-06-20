

const frequencyAnalysis = (inputString) => {
        let letterCount = {};
    
        for (let i = 0; i < inputString.length; i++) {
            if (inputString[i] != ' ') {
                if (letterCount[inputString[i]]) letterCount[inputString[i]] = letterCount[inputString[i]] + 1;
                else letterCount[inputString[i]] = 1;
            }
        }
        return letterCount;
    }

module.exports = frequencyAnalysis;
