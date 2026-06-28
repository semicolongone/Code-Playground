const fruits = ["Apple", "Banana"];
 
// Example 1 — add one item
fruits.push("Mango");
console.log(fruits);

const arr = [1, 2, 3];
arr.push([4, 5]);
console.log(arr);

// Example 3 — push returns the new length
const newLength = fruits.push("Peach");
console.log(newLength); // 6
console.log(fruits);

// ============================================================
//  pop()
// ============================================================
 
// Purpose:
//   Removes the LAST item from an array and returns it.
 
// Syntax:
//   array.pop()
 
// Parameters:
//   None.
 
// Returns:
//   The removed item.
 
// Mutates original array? YES

let veggies = ["Carrot", "Cucumber", "Eggplant"];
let removed = veggies.pop();
console.log(removed);

console.log(veggies);

veggies.pop();
console.log(veggies);

let num = [1, 2, 3, 4, 5];
let remove = [num.pop()];
console.log(remove);

remove = [num.pop()];
console.log(remove);

remove = remove.push(num.pop());
console.log(remove);

remove = remove.push(num.pop());
let furniture = ["Chair", "Table", "Carpet"];
let items = [{ id: 1 }, { id: 2 }, { id: 3 }];
furniture.pop();
console.log(furniture);

items.pop();
console.log(items);

let full = [];
full.pop();
console.log(full);