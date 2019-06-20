// note: you need define the parameters in the function if needed

function compareObjects(inputObject1, inputObject2) {

    if (inputObject1.length !== inputObject2.length) return false;

    for (let i in inputObject1) {

        if (inputObject1[i] !== inputObject2[i]) return false;
    }
    for (let i in inputObject2) {
        if (inputObject1[i] !== inputObject2[i]) return false;
    }

    return true;
}

module.exports = compareObjects;
