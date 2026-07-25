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

// ============================================================
//  findIndex()
// ============================================================
 
// Purpose:
//   Returns the INDEX of the first item that passes the test.
//   Returns -1 if nothing matches.
 
// Syntax:
//   array.findIndex((item, index, array) => condition)
 
// Parameters:
//   Same as find()
 
// Returns:
//   Index number (0 or more) if found
//   -1 if not found
 
// Mutates original array? NO

let ind = students.findIndex((index) => {
    return index.marks > 99;
});

let third = students.findIndex((index) => {
    return index.id === 3;
});

let idx = students.findIndex((index) => {
    return index.id === 1;
});
if (idx !== -1) {
    students[idx].marks = 95;
};
console.log(students[idx]);

let identifier = students.findIndex((index) => {
    return index.name === "Ravi";
});
if (identifier !== -1) {
    students.splice(identifier, 1);
};

//  Question                              Method
//  I want the actual item/object         find()
//  I want the position of the item       findIndex()
//  I want to update/remove after finding findIndex() + splice()
 
// ------------------------------------------------------------

//  find() vs filter() — IMPORTANT DIFFERENCE
// ------------------------------------------------------------
 
// filter() → returns ALL matches as an array
// find()   → returns ONLY the FIRST match (the item itself)

console.log([].find((n) => n > 0));
console.log([].findIndex((n) => n > 0));