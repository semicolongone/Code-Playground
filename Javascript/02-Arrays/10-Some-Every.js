// ============================================================
//  10 - some() and every()
// ============================================================
//  Both test items in the array against a condition.
//  Both return true or false.
//
//  every() → true only if ALL items pass
//  some()  → true if AT LEAST ONE item passes
// ============================================================
 
// ============================================================
//  every()
// ============================================================
 
// Purpose:
//   Returns true only if EVERY item in the array passes the test.
//   If even one item fails, it immediately returns false.
 
// Syntax:
//   array.every((item, index, array) => condition)
 
// Parameters:
//   item  → current value
//   index → current position (optional)
 
// Returns:
//   true  → all items pass
//   false → at least one item fails
 
// Mutates original array? NO

let marks = [29, 82, 95, 17, 52];
console.log(marks.every((mark) => mark >= 50));

let numbers = [29, 1, 95, 2, 8];
console.log(numbers.every((number) => number > 0));

let words = ["hello", "hi", "goodbye", "yes", "no"];
console.log(words.every((word) => typeof word == "string"));

let students = [{name: "Sarah", submitted: true}, {name: "John", submitted: false}];
console.log(students.every((student) => student.submitted === true));

let responses = ["Aayan", "13", "email.com"];
console.log(responses.every((response) => response.length > 0));

let scores = [91, 93, 29, 97, -2];
console.log(scores.some((score) => score >= 90));

let data = [1, 453, 69, 24, 3];
console.log(data.some((num) => num < 0));

let products = [{name: "Laptop", stock: 250}, {name: "Pencil", stock: 4500}, {name: "Lamp", stock: 3}];
console.log(products.some((product) => product.stock < 500));

let fields = [{name: "John", email: "john.com", phone: 1}, {name: "Jeff", email: "jeff.com", phone: 2}];
const values = Object.values(fields);
const hasEmpty = values.some((value) => value === "");
console.log(hasEmpty);

let classroom = [{name: "Steve", mark: "72"}, {name: "Greg", mark: "23"}, {name: "Sarah", mark: "89"}];
let helpChecker = classroom.some((student) => student.mark > 50);
console.log(helpChecker);

// every() → ALL must pass → returns true/false
// some()  → ONE must pass → returns true/false
// Both stop early once the answer is known
// Both return boolean (true or false)
// Neither changes the original array
// every([]) → true   (empty array: all zero items passed)
// some([])  → false  (empty array: no item passed)