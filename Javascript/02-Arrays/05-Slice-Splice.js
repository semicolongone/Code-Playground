//  slice()
// ============================================================
 
// Purpose:
//   Returns a NEW array containing a portion of the original.
//   Like cutting a slice of bread — the loaf stays, you get a piece.
 
// Syntax:
//   array.slice(start)
//   array.slice(start, end)   ← end is NOT included
 
// Parameters:
//   start → index to begin from (included)
//   end   → index to stop at (NOT included)
//   Both can be negative (count from end)
 
// Returns:
//   A new array (the slice)
 
// Mutates original array? NO

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice(1, 2));

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice(-3));

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice(-2, 0));

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice(10));

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice(3, 1));

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice());

console.log([].slice());

//  splice()
// ============================================================
 
// Purpose:
//   Removes, replaces, or inserts items at any position.
//   Changes the original array directly.
 
// Syntax:
//   array.splice(start)
//   array.splice(start, deleteCount)
//   array.splice(start, deleteCount, item1, item2, ...)
 
// Parameters:
//   start       → index to start making changes
//   deleteCount → how many items to remove (0 = remove nothing)
//   item1...    → (optional) items to INSERT at that position
 
// Returns:
//   An array of the REMOVED items (empty array if nothing removed)

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
 
// Example 1 — remove 1 item at index 2
const removed1 = colors.splice(2, 1);
console.log(removed1); // ["Blue"]
console.log(colors);   // ["Red", "Green", "Yellow", "Purple"]
console.log(colors.splice(1, 2));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.splice(1));

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(letters.splice(5, 10));
console.log(letters.splice(5, 0, 42))

const letters = ["A", "D", "E"];
letters.splice(1, 0, "B", "C");
console.log(letters); // ["A", "B", "C", "D", "E"]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days.splice(1, 1, "Sad day (School)"))