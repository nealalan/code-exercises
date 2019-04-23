/*
Attendance Check
Define a function, attendanceCheck, that accepts a day of the week as a string.

Using the globally-defined classRoom array, attendanceCheck should return a new 
array with only the names of the students present on the inputted day of the week.
*/
let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

const attendanceCheck = (inputDay) => {
    // The studentSchedule is an: 
    //  array of objects with the key being the student name
    //    the value for the student name is an array of objects 
    //      each object key is a day and value is a bool if the student has class that day
    let outputArray = [];

    for (let i = 0; i < classRoom.length; i++) {
        // extract the single student object keys as an array and return the first index 
        let studentName = Object.keys(classRoom[i])[0];
        // extract the student schedule array [ {"DotW": Bool}, ...]
        let studentSchedule = classRoom[i][Object.keys(classRoom[i])];
        // search through the student schedule array or objects
        for (let key in studentSchedule) {
            // if the key (current index) is the object key and the value is true 
            if (studentSchedule[key][inputDay])
                outputArray.push(studentName);
        }
    }
    return outputArray;
        
}
// TEST CONDITIONS
console.log(attendanceCheck('Monday')); // => ['Marnie', 'Shoshanna']
console.log(attendanceCheck('Wednesday')); // => ['Marnie', 'Lena']
