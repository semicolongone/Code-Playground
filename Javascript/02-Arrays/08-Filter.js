//  08 - filter()
// ============================================================
 
// Purpose:
//   Creates a NEW array containing only the items that pass
//   a test (condition). Items that fail are left out.
 
// Syntax:
//   array.filter(function(item, index, array) { ... })
//   array.filter((item, index, array) => { ... })
 
// Parameters (inside the callback):
//   item   → current value
//   index  → current position
//   array  → full array (rarely needed)

// Returns:
//   A new array (can be shorter than original, never longer)
//   Empty array [] if nothing passes the test
 
// Mutates original array? NO
 
// Key rule: return TRUE to KEEP the item, FALSE to EXCLUDE it.

let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered = marks.filter((mark) => {
    return mark > 3;
});
console.log(filtered);
let evenfilter = marks.filter((even) => {
    return even % 2 === 0;
});
console.log(evenfilter);

let greeting = ["hi", "hello", "greetings"];
let longwords = greeting.filter((greet) => {
    return greet.length > 3;
});
console.log(longwords);

let students = [{name: "Bob", marks: "87", pass: "True"}, {name: "Tom", marks: "59", pass: "False"}, {name: "Sarah", marks: "92", pass: "True"}];
let passfilter = students.filter((student) => {
    return student.pass === "True";
});
console.log(passfilter);
let topstudents = students.filter((student) => {
    return student.marks >= 90;
}).map((names) => {
    return names.name;
});
console.log(topstudents);

let fruits = ["Apple", "Banana", "Mango"];
let noBanana = fruits.filter((fruit) => {
    return fruit !== "Banana";
});
console.log(noBanana);

let letters = ["A", "B", "C", "D", "E"];
let oddIndex = letters.filter((index) => {
    return index % 2 !== 0;
});
console.log(oddIndex);