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

let marks = [0, 12, 35, 78, 86, 100];
console.log(marks.includes(16));

let colors = ["Red", "Orange", "Yellow", "Green", "Blue"];
console.log(colors.includes("green", 2));

console.log([].includes());

let und = [12, "forty-two", undefined, "Steve"];
console.log(und.includes(undefined));

let NN = [1, 2, "edo", NaN, "ode"];
console.log(NN.includes(NaN));

// ============================================================
//  indexOf()
// ============================================================
 
// Purpose:
//   Returns the INDEX of the first match.
//   Returns -1 if the item is not found.
 
// Syntax:
//   array.indexOf(value)
//   array.indexOf(value, startIndex)
 
// Parameters:
//   value      → the item to search for
//   startIndex → (optional) start searching from this index
 
// Returns:
//   Index number (0 or more) if found
//   -1 if not found
 
// Mutates original array? NO

let veggies = ["Carrot", "Onion", "Eggplant"];
console.log(veggies.indexOf("Carrot"));

const search = "Spinach";
if (veggies.indexOf(search) !== -1) {
    console.log(search + " found at index", veggies.indexOf(search));
}