// ============================================================
//  includes()
// ============================================================
 
// Purpose:
//   Checks if a value exists in the array.
//   Returns true if found, false if not.
 
// Syntax:
//   array.includes(value)
//   array.includes(value, startIndex)  // optional: start searching from here
 
// Parameters:
//   value      → the item to search for
//   startIndex → (optional) index to start the search from
 
// Returns:
//   true or false
 
// Mutates original array? NO

let books = ["Harry Potter", "Ikigai", "Game of Thrones"];
console.log(books.includes("Alchemist"));

console.log(books.includes("Ikigai"));

console.log(books.includes("ikigai"));