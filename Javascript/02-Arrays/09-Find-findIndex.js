//  find()
// ============================================================
 
// Purpose:
//   Finds and returns the FIRST item that passes the test.
//   Stops searching as soon as it finds a match.
 
// Syntax:
//   array.find((item, index, array) => condition)
 
// Parameters:
//   item   → current value
//   index  → current position (optional)
//   array  → full array (optional, rarely used)
 
// Returns:
//   The first matching item
//   undefined if nothing matches
 
// Mutates original array? NO

let students = [
    {name: "John", id: 1, marks: 54},
    {name: "Sarah", id: 2, marks: 87},
    {name: "Sam", id: 3, marks: 92},
];
let topper = students.find((student) => {
    return student.marks >= 90;
});
console.log(topper);
let two = students.findIndex((student) => {
    return student.id === 2;
});
console.log(two);
let named = students.find((student) => {
    return student.name === "John";
});
console.log(named);
let tryhard = students.find((student) => {
    return student.marks === 99;
});
console.log(tryhard);