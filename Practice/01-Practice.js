// ============================================================
//  practice-01.js
//  Topics: Array Basics, push, pop, shift, unshift, includes
// ============================================================
//  Instructions:
//  - Write your answer below each question
//  - Do NOT look at hints unless you are stuck
//  - Run the file in Node.js to check your output
// ============================================================



// ============================================================
//  SECTION 1 — Array Basics (Q1–Q10)
// ============================================================

// Q1.
// Create an array called 'colors' with 5 color names.
// Log the entire array.

// Your answer:


// ----------------------------------------------------------

// Q2.
// Using the array below, log the first and last item.
// Do NOT hardcode the index of the last item.
// Use .length to find it.

const cities = ["Delhi", "Mumbai", "Jaipur", "Chennai", "Kolkata"];

// Your answer:


// ----------------------------------------------------------

// Q3.
// What will this code log? Write your guess first, then run it.

const nums = [10, 20, 30, 40, 50];
console.log(nums[0]);
console.log(nums[2]);
console.log(nums[4]);
console.log(nums[5]);

// Your guess:
// nums[0]  →
// nums[2]  →
// nums[4]  →
// nums[5]  →

// ----------------------------------------------------------

// Q4.
// Change the second item of this array to "Mango".
// Log the updated array.

const fruits = ["Apple", "Banana", "Kiwi"];

// Your answer:


// ----------------------------------------------------------

// Q5.
// Log the LENGTH of each array below.

const a = [];
const b = [1, 2, 3];
const c = ["x", "y", "z", "w"];

// Your answer:


// ----------------------------------------------------------

// Q6.
// What is wrong with this code? Fix it and explain why.

const animals = ["Cat", "Dog", "Fish"];
console.log(animals[3]); // What does this log? Why?

// Your explanation:
// Fixed code:


// ----------------------------------------------------------

// Q7.
// Log the SECOND TO LAST item from this array.
// Use .length — do not hardcode the index.

const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Your answer:


// ----------------------------------------------------------

// Q8.
// Create an array that contains:
// - a string
// - a number
// - a boolean
// - null
// Log the array and its length.

// Your answer:


// ----------------------------------------------------------

// Q9.
// Create an array of 3 students (as objects with name and marks).
// Log the name of the second student.
// Log the marks of the third student.

// Your answer:


// ----------------------------------------------------------

// Q10.
// Is this an array? Check using Array.isArray().
// Then also check using typeof.
// What is the difference in output?

const data = [1, 2, 3];

// Your answer:




// ============================================================
//  SECTION 2 — push() and pop() (Q11–Q20)
// ============================================================

// Q11.
// Start with this array: ["Pen", "Book"]
// Push "Ruler" to it.
// Log the array after pushing.

const stationery = ["Pen", "Book"];

// Your answer:


// ----------------------------------------------------------

// Q12.
// Push TWO items at the same time to this array.
// Then log the array.

const bag = ["Bottle", "Tiffin"];

// Your answer:


// ----------------------------------------------------------

// Q13.
// push() returns something. What does it return?
// Capture the return value of push and log it.

const items = ["A", "B"];

// Your answer:


// ----------------------------------------------------------

// Q14.
// Pop an item from this array.
// Log WHAT WAS REMOVED and the ARRAY AFTER removal.

const stack = ["Layer1", "Layer2", "Layer3"];

// Your answer:


// ----------------------------------------------------------

// Q15.
// What will this code log? Guess first, then run it.

const letters = ["P", "Q", "R", "S"];
letters.push("T");
letters.push("U");
letters.pop();
letters.pop();
console.log(letters);

// Your guess:


// ----------------------------------------------------------

// Q16.
// You have a list of tasks.
// A new task "Buy groceries" just came in — add it to the END.
// The last task "Sleep" is done — remove it from the END.
// Log the final task list.

const tasks = ["Wake up", "Exercise", "Study", "Cook", "Sleep"];

// Your answer:


// ----------------------------------------------------------

// Q17.
// Keep popping from this array until it is empty.
// Log each popped item.
// After the loop, log the array to confirm it is empty.

const box = ["Item1", "Item2", "Item3", "Item4"];

// Your answer (use a while loop):


// ----------------------------------------------------------

// Q18.
// This is a score history array.
// Add 3 new scores one by one using push.
// Then remove the last score using pop.
// Log the final array.

const scores = [45, 78, 90];
// New scores to add: 55, 88, 72

// Your answer:


// ----------------------------------------------------------

// Q19.
// What happens when you pop() from an empty array?
// Write the code, guess the output, then run it.

const empty = [];

// Your guess:
// Your answer:


// ----------------------------------------------------------

// Q20.
// Build a simple browser history simulation.
// Start with empty array: const history = []
// Visit 3 pages by pushing their names.
// Go back (pop the last visited page).
// Log the current history and the page you went back from.

// Your answer:




// ============================================================
//  SECTION 3 — shift() and unshift() (Q21–Q30)
// ============================================================

// Q21.
// Remove the first item from this array using shift().
// Log what was removed and the array after removal.

const queue = ["Alice", "Bob", "Charlie", "Diana"];

// Your answer:


// ----------------------------------------------------------

// Q22.
// Add "Maths" to the BEGINNING of this subjects array.

const subjects = ["Science", "English", "History"];

// Your answer:


// ----------------------------------------------------------

// Q23.
// What will this log? Guess first.

const line = ["B", "C", "D"];
line.unshift("A");
line.shift();
line.unshift("Z");
console.log(line);

// Your guess:


// ----------------------------------------------------------

// Q24.
// unshift() returns something. What does it return?
// Capture and log the return value.

const arr = ["X", "Y"];

// Your answer:


// ----------------------------------------------------------

// Q25.
// Simulate a ticket queue:
// - Start: ["Person1", "Person2", "Person3"]
// - Person1 is served → remove from front
// - "Person4" joins → add to back
// - "Person0" is VIP → add to FRONT
// Log the final queue.

const ticketQueue = ["Person1", "Person2", "Person3"];

// Your answer:


// ----------------------------------------------------------

// Q26.
// What is the difference between these two operations?
// Predict what each logs, then run it.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

arr1.shift();
arr2.pop();

console.log(arr1);
console.log(arr2);

// Your prediction:
// arr1 →
// arr2 →

// ----------------------------------------------------------

// Q27.
// Use unshift to add the numbers 3, 2, 1 one at a time
// to an empty array so the final array is [1, 2, 3].
// Think carefully about the ORDER you call unshift.

// Your answer:


// ----------------------------------------------------------

// Q28.
// Remove items from the front of this array one by one
// using shift() inside a loop.
// Log each removed item.
// After the loop, confirm the array is empty.

const train = ["Engine", "Bogie1", "Bogie2", "Bogie3"];

// Your answer:


// ----------------------------------------------------------

// Q29.
// What is the output of this code? Trace through it manually first.

const plate = [];
plate.unshift("Bottom");
plate.unshift("Middle");
plate.unshift("Top");
plate.shift();
console.log(plate);
console.log(plate.length);

// Your trace:


// ----------------------------------------------------------

// Q30.
// push vs unshift — fill in the blanks:
//
// To add to the END   → use ___________
// To add to the START → use ___________
// To remove from END  → use ___________
// To remove from START → use __________
//
// Write one example of each using this array:

const sample = ["B", "C", "D"];

// Your answer:




// ============================================================
//  SECTION 4 — includes() (Q31–Q40)
// ============================================================

// Q31.
// Check if "Banana" is in this array. Log true or false.

const basket = ["Apple", "Mango", "Banana", "Kiwi"];

// Your answer:


// ----------------------------------------------------------

// Q32.
// Check if "banana" (lowercase) is in the same array above.
// What do you notice? Why?

// Your answer:


// ----------------------------------------------------------

// Q33.
// Use includes() inside an if/else to print:
// "Mango found!" if Mango is in the array
// "Mango not found" if it is not.

const tray = ["Apple", "Grapes", "Mango"];

// Your answer:


// ----------------------------------------------------------

// Q34.
// What will this log? Guess first.

const mixed = [1, 2, "three", true, null];
console.log(mixed.includes(2));
console.log(mixed.includes("2"));
console.log(mixed.includes(true));
console.log(mixed.includes(false));
console.log(mixed.includes(null));

// Your guess:


// ----------------------------------------------------------

// Q35.
// You have a list of allowed usernames.
// Check if "admin" is allowed and log an appropriate message.

const allowedUsers = ["alice", "bob", "charlie", "admin", "diana"];
const loginAttempt = "admin";

// Your answer:


// ----------------------------------------------------------

// Q36.
// includes() has a second parameter — startIndex.
// What does this log? Think first.

const nums2 = [5, 10, 15, 10, 20];
console.log(nums2.includes(10));
console.log(nums2.includes(10, 2));
console.log(nums2.includes(10, 4));

// Your guess:


// ----------------------------------------------------------

// Q37.
// A student finished some topics. Check which ones are done.
// Log "Done" or "Not done" for each topic below.

const completedTopics = ["variables", "loops", "functions", "arrays"];
const toCheck = ["loops", "objects", "arrays", "dom"];

// Your answer (use forEach + includes):


// ----------------------------------------------------------

// Q38.
// What is the difference between includes() and indexOf()?
// Both check if an item exists — when would you use each?

// Your answer (in comments):
//
//


// ----------------------------------------------------------

// Q39.
// Can includes() find NaN in an array?
// Write code to test it and explain the result.

const withNaN = [1, 2, NaN, 4];

// Your answer:


// ----------------------------------------------------------

// Q40.
// MIXED — combine what you have learned.
// Start with: const playlist = ["Song1", "Song2", "Song3"]
//
// a) Check if "Song2" is already in the playlist.
// b) If it is NOT there, add it to the end using push.
// c) Add "Song0" to the beginning using unshift.
// d) Remove the last song using pop.
// e) Log the final playlist.

const playlist = ["Song1", "Song2", "Song3"];

// Your answer:




// ============================================================
//  SECTION 5 — Mixed (Q41–Q50)
// ============================================================

// Q41.
// Start with an empty array called 'cart'.
// Push: "Shirt", "Shoes", "Belt"
// Remove the last item.
// Add "Watch" to the beginning.
// Log the final cart.

// Your answer:


// ----------------------------------------------------------

// Q42.
// Given this array, write code that:
// - Checks if "Physics" is in the list
// - If yes: removes it from the front or back (use pop or shift)
// - If no: adds it to the end
// Log the final array.

const classList = ["Maths", "Physics", "Chemistry"];

// Your answer:


// ----------------------------------------------------------

// Q43.
// Predict the output of this entire block before running it.

const stack2 = [];
stack2.push("A");
stack2.push("B");
stack2.push("C");
stack2.pop();
stack2.unshift("Z");
stack2.shift();
stack2.push("D");
console.log(stack2);
console.log(stack2.length);

// Your prediction:


// ----------------------------------------------------------

// Q44.
// You are building a notification system.
// New notifications come in at the END (push).
// The user reads notifications from the END (pop).
// Add 4 notifications. Then simulate user reading 2 of them.
// Log remaining notifications.

// Your answer:


// ----------------------------------------------------------

// Q45.
// Build a small program:
// - Create array of 5 numbers
// - Check if 99 is in the array using includes
// - If not: push 99 to the array
// - Log the final array

// Your answer:


// ----------------------------------------------------------

// Q46.
// What will this log?

const queue2 = ["First", "Second", "Third"];
queue2.push("Fourth");
queue2.shift();
queue2.unshift("Zero");
queue2.pop();
console.log(queue2);

// Your prediction:


// ----------------------------------------------------------

// Q47.
// Create an array of 5 subject names.
// Ask yourself — is "PE" in the array?
// If it is, remove it from wherever it is
//   (pop if last, shift if first — choose based on position).
// If it is not, add it using push.
// Log the result.

// Your answer:


// ----------------------------------------------------------

// Q48.
// You have a history of pages visited.
// Write code that:
// - Adds 3 new pages to the END
// - Checks if "home" is in history using includes
// - If not: adds "home" to the BEGINNING using unshift
// - Log the final history

const history = ["about", "contact"];
// Pages to add: "services", "blog", "portfolio"

// Your answer:


// ----------------------------------------------------------

// Q49.
// What is wrong with this code? Find and fix ALL bugs.

const buggy = ["Red, Green, Blue"];
buggy.Push("Yellow");
buggy.Pop();
console.log(buggy.includes("Red"));
console.log(buggy[1]);

// Your explanation:
// Fixed code:


// ----------------------------------------------------------

// Q50. — FINAL CHALLENGE
// Build a simple "Recently Viewed" list.
// Rules:
// - The list can hold MAX 3 items
// - New items are added to the FRONT using unshift
// - If adding a new item makes it more than 3, remove the LAST item using pop
// - Do NOT add an item if it already exists (use includes)
//
// Start: const recentlyViewed = []
// Add: "Home", "About", "Services", "Contact", "About"
// Log the list after each addition.

// Your answer:
