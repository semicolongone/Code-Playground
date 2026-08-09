// Purpose:
//   Processes every item in an array and boils it all down
//   to a SINGLE value — a sum, a count, an object, anything.

// Syntax:
//   array.reduce((accumulator, currentItem) => { ... }, initialValue)
 
// Parameters (inside the callback):
//   accumulator → carries the running result
//   currentItem → the current array item
//   index       → (optional) current index
//   array       → (optional) full array
 
//   initialValue → the starting value of accumulator
//                  (almost always provide this — avoids bugs)
 
// Returns:
//   A single value (number, string, object, array — anything)
 
// Mutates original array? NO

// ------------------------------------------------------------
//  MENTAL MODEL
// ------------------------------------------------------------
 
// Think of reduce like a snowball rolling downhill.
// It starts small (initialValue), and picks up snow (each item)
// as it rolls, growing bigger until the end.
 
// Or like a calculator:
//   Start with 0
//   Press +85, +90, +78
//   Read the total

let marks = [9, 29, 95, 17, 75];
const total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);

const average = total / marks.length;
console.log(average);

const max = marks.reduce((highest, mark) => {
    return mark > highest ? mark : highest;
}, 0);
console.log(max);
let fruits = ["Apple", "Mango", "Apple", "Banana"];
const counter = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1; 
    return count; 
    }, {});
console.log(counter);

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => {
    acc.concat(arr), []
});
console.log(flat);

let cart = [{item: "Hat", price: 12.99, quantity: 250}, {item: "Bat", price: 89.99, quantity: 35}];
let added = cart.reduce((add, product) => {
    return add + [product.price * product.quantity];
}, 0);

let students = [{name: "Mark", grade: "C"}, {name: "Max", grade: "A"}, {name: "John", grade: "E"}, {name: "Paul", grade: "A"}];
const group = students.reduce((gruop, student) => {
    const grade = student.grade;
    if (!gruop[grade]) {gruop[grade] = [];}
    gruop[grade].push(student.name);
    return gruop;
}, {});
console.log(gruop);
// { A: ["Max", "Paul"], C: ["Mark"], E: ["John"] }

//  SUMMARY
// ------------------------------------------------------------
 
// reduce() boils an array down to a single value
// Callback receives: accumulator, currentItem (and optionally index, array)
// Always provide an initialValue (prevents bugs on empty arrays)
// Always return the accumulator inside the callback
// Can produce: numbers, strings, objects, arrays — anything
// Use for: totals, averages, grouping, flattening, counting