// ============================================================
//  07 - map()
// ============================================================
 
// Purpose:
//   Creates a NEW array by transforming every item.
//   For every item in the original, it produces exactly one
//   item in the new array.
 
// Syntax:
//   array.map(function(item, index, array) { ... })
//   array.map((item, index, array) => { ... })
 
// Parameters (inside the callback):
//   item   → current value
//   index  → current position
//   array  → full array (rarely needed)

// Returns:
//   A brand new array of the same length
 
// Mutates original array? NO
 
// Key rule: whatever you RETURN inside the callback
//           becomes the item in the new array.

let fruits = ["Apple", "Banana", "Mango"];
const upper = fruits.map((fruit) => {
    return fruit.toUpperCase();
});
console.log(fruits);
console.log(upper);

let prices = [14.99, 23.45, 12.87, 39.65];
let GST = prices.map((price) => {
    return (price * 1.18).toFixed(2);
});
console.log(GST);

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((number) => {
    return number * 2;
});
console.log(doubled);

let students = [{name: "John", marks: 87}, {name: "Sarah", marks: 79}, {name: "Tom", marks: 95}];
let names = students.map((student) => {
    return student.name;
});
console.log(names);
let result = students.map((student) => {
    return {
        studentname: student.name,
        grade: student.marks >= 90 ? "A": "B",};
});
console.log(result);
let sequence = names.map((student, index) => {
    return (index + 1) + ". " + student;
});
console.log(sequence);

let temperatures = [18, 29, 57, 87, 92];
const fahrenheit = temperatures.map((temperature) => {
    return (temperature * (9/5) + 32);
});
console.log(fahrenheit).toFixed(2);