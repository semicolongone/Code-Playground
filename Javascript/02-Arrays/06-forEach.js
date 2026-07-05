//  06 - forEach()
// ============================================================
 
// Purpose:
//   Loops through every item in an array and runs a function
//   for each one. Used for side effects — printing, updating
//   the DOM, logging, etc.
 
// Syntax:
//   array.forEach(function(item, index, array) { ... })
//   array.forEach((item, index, array) => { ... })
 
// Parameters (inside the callback):
//   item   → the current value
//   index  → the current position (0, 1, 2...)
//   array  → the full array (rarely needed)
 
// Returns:
//   undefined (always — you cannot use forEach's return value)
 
// Mutates original array? NO (but you CAN manually change items inside)

let fruits = ["Apple", "Banana", "Mango", "Grape", "Watermelon"];
fruits.forEach(function(fruit) {
    console.log(fruit);
})

fruits.forEach((fruit) => {
    console.log(fruit);
});

fruits.forEach((fruit, index) => {
    console.log(index + 1 + "." + fruit);
});

let num = [1, 2, 3, 4, 5];
num.forEach((mark, index) => {
    console.log("Student" + " " + (index + 1) + " " + "scored" + " " + mark);
});

let prices = [42.99, 12.99, 8.99];
let total = 0;
prices.forEach((price) => {
    total = total + price;
});
console.log("total" + " " + "=" + " " + total);

const students = [{name: "John", marks: 37}, {name: "Sarah", marks: 87}, {name: "Sam", marks: 99}];
students.forEach((student, index) => {
    console.log("Student" + " " + (index + 1) + "." + student.marks);
    console.log("Student" + " " + student.name + " " + "scored" + " " + student.marks);
});

const result = fruits.forEach((f) => f.toUpperCase());
console.log(result); // undefined  ← NOT the new array!