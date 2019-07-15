/* eslint-disable no-return-assign */
// NEAL DREHER 2019-07-13
/* eslint-disable no-unused-vars */
/*
You are given an array of desired filenames in the order of their creation. 
Since two files cannot have equal names, the one which comes later will have 
an addition to its name in a form of (n), where "n" is the smallest positive
integer. There shouldn't be any duplicate names.

Return an array of names that will be given to the files. 

 INPUT: ['myFile', 'anotherFile', 'family-picture', 'myFile', 'another-file', 'myFile']
OUTPUT: ['myFile', 'anotherFile', 'family-picture', 'myFile(1)', 'anotherFile(1)', 'myFile(2)'] 

TEST CONDITIONS: The function `renameFiles`
    returns an array
    does not rename files if duplicates are not present
    renames files if there are duplicates by adding `(n)` to the end of the filename where `n` is the smallest positive integer that the obtained name did not use.
    does not rename files to names that are already taken
*/
//  NOTE: TO SHORTEN THE CYCLES, THIS LOOP SHOULD ONLY HAPPEN UNTIL array.length()-3  

const renameFiles = (filenameArray) => {
    // START AT THE ITEM, CHECK FOR SUCCEEDING DUPS & RENAME
    return filenameArray.map((value, index) => {
        let nameSeq = 1;
        // CHECK THE value AGAINST EACH SUCCEEDING ITEM
        filenameArray.slice(index + 1).map((cValue, cIndex) => {
            if (cValue === value) {
                // does not rename files to names that are already taken
                while (filenameArray.includes(`${cValue}(${nameSeq})`)) nameSeq++;
                // UPDATE *BOTH* filenameArray & checkArray (via return to map)
                return filenameArray[index + cIndex + 1] = `${cValue}(${nameSeq})`;
            }
        });
        return value;  // We aren't changing this, only checking against it
    });
}

// let files = ['(1)', '(1)', 'myFile', 'anotherFile', 'family-picture', 'myFile', 'anotherFile', 'myFile'];
// console.log(files);
// let newFileNames = renameFiles(files);
// console.log(`\n`, newFileNames); 
