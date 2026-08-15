// ============================================================
//  flat()
// ============================================================
 
// Purpose:
//   Flattens nested arrays into a single array.
//   By default flattens only ONE level deep.
 
// Syntax:
//   array.flat()
//   array.flat(depth)   ← how many levels to flatten
 
// Returns:   A new flat array
// Mutates?   NO

const arr = [[1, 2], [3, 4], 5, 6];
const flatArr = arr.flat();

const ar = [[[1, 2], [3, 4]], [[5, 6] [7, 8]]];
const flatAr = ar.flat(2);

const a = [[1, 2], [3, 4]];
const flatA = a.flat(Infinity);

const studentMarks = [[87, 65], [97, 23], [43, 1]];
const flatMarks = studentMarks.flat();

// ============================================================
//  sort()
// ============================================================
 
// Purpose:
//   Sorts the array IN PLACE (changes the original).
//   Default: sorts as strings (A-Z, 0-9 by character).
//   For numbers: MUST pass a compare function.
 
// Syntax:
//   array.sort()
//   array.sort((a, b) => a - b)   // ascending numbers
//   array.sort((a, b) => b - a)   // descending numbers
 
// Returns:   The sorted array (same reference)
// Mutates?   YES — changes the original

const fruits = ["Apple", "Mango", "Banana"];
fruits.sort();

const numbers = [38, 28, 1, 57, 20, 97, 100];
numbers.sort();
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);

const students = [{name: "John", marks: 87}, {name: "Sarah", marks: 65}, {name: "Tom", marks: 97}];
students.sort((a, b) => a.marks - b.marks);

const original = [28, 17, 96, 35, 49];
const sorted = [...original];
sorted.sort((a, b) => a - b);

// ============================================================
//  reverse()
// ============================================================
 
// Purpose:
//   Reverses the order of the array IN PLACE.
 
// Syntax:
//   array.reverse()
 
// Returns:   The reversed array (same reference)
// Mutates?   YES

const letters = ["a", "b", "c"];
letters.reverse();

const scores = [43, 98, 87];
scores.sort((a, b) => a - b).reverse();

const arr = [1, 2, 3, 4, 5];
const duplicatedArr = [...arr];
duplicatedArr.reverse();

// ============================================================
//  join()
// ============================================================
 
// Purpose:
//   Joins all array items into a single STRING.
//   Opposite of String's split() method.
 
// Syntax:
//   array.join()
//   array.join(separator)   ← what to put between items
 
// Returns:   A string
// Mutates?   NO

const random = ["Hello", "Blue", "Seven", "Food", "Topic"];
random.join(", ");
random.join("");

const numerals = [5, 32, 8, 653, 89];
const values = numerals.join();
values.split(", ");

// ------------------------------------------------------------
//  SUMMARY
// ------------------------------------------------------------
 
// flat()    → flattens nested arrays → new array     → original safe
// sort()    → sorts in place         → same array    → mutates original ← use [...arr].sort() to be safe
// reverse() → reverses in place      → same array    → mutates original ← use [...arr].reverse() to be safe
// join()    → array → string         → returns string → original safe