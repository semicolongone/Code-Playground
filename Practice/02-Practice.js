// ============================================================
//  practice-02.js
//  Topics: slice(), splice(), forEach()
// ============================================================
//  Instructions:
//  - Write your answer below each question
//  - Do NOT look at the solutions file unless you are stuck
//  - Run the file in Node.js to check your output
// ============================================================



// ============================================================
//  SECTION 1 — slice() (Q1–Q15)
// ============================================================
//  QUICK REMINDER:
//  slice(start, end)
//  → returns a NEW array from start up to (NOT including) end
//  → original array is NEVER changed
//  → negative indexes count from the end
// ============================================================

// Q1.
// What will this log? Guess first, then run it.

const fruits = ["Apple", "Banana", "Mango", "Grape", "Kiwi"];
//               [0]       [1]       [2]      [3]      [4]

console.log(fruits.slice(1, 3));
console.log(fruits.slice(2));
console.log(fruits.slice(0, 2));

// Your guess:

// slice(1, 3) → ["Apple", "Kiwi"];
// slice(2)    → ["Apple"];
// slice(0, 2) → [];

// ----------------------------------------------------------

// Q2.
// Using the array below, slice out just the middle 3 items.
// The result should be: ["Tue", "Wed", "Thu"]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Your answer:

console.log(days.slice(1, 3));

// ----------------------------------------------------------

// Q3.
// Use a NEGATIVE index to get the last 2 items from this array.
// Do NOT use .length.

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// Your answer:

console.log(colors.slice(-2, 2));

// ----------------------------------------------------------

// Q4.
// Slice the first 3 items from this array.
// Then prove the original array is unchanged by logging it.

const nums = [10, 20, 30, 40, 50];

// Your answer:

console.log(nums.slice(0, 3));
console.log(nums);

// ----------------------------------------------------------

// Q5.
// What does slice() return when start and end are the same?
// Predict, then test it.

const letters = ["A", "B", "C", "D"];
console.log(letters.slice(2, 2));

// Your guess:

// It returns the first mentioned instance of it.

// ----------------------------------------------------------

// Q6.
// Use slice() to make a COPY of the entire array.
// Then push a new item to the copy.
// Prove the original is untouched.

const original = ["Cat", "Dog", "Fish"];

// Your answer:

let duplicate = console.log(original.slice());
duplicate.push("Elephant");
console.log(original);

// ----------------------------------------------------------

// Q7.
// What will this log? Trace it manually.

const scores = [55, 70, 85, 90, 60, 75];
const part = scores.slice(2, 5);
console.log(part);
console.log(scores);

// Your trace:
// part   → [85, 90, 60]
// scores → [55, 70, 85, 90, 60, 75]

// ----------------------------------------------------------

// Q8.
// Use slice() with a negative start AND negative end.
// What do you think this returns?

const items = ["P", "Q", "R", "S", "T", "U"];
console.log(items.slice(-4, -1));

// Your guess:

// ['R', 'S', 'T']

// ----------------------------------------------------------

// Q9.
// You have a leaderboard of 10 players.
// Use slice() to get:
//   a) The top 3 players (first 3)
//   b) Players ranked 4th to 7th
//   c) The bottom 2 players (last 2)

const leaderboard = [
    "Alice", "Bob", "Charlie", "Diana", "Eve",
    "Frank", "Grace", "Henry", "Isla", "Jack"
];

// Your answer:

let topthree = leaderboard.slice(0, 3);
let midranked = leaderboard.slice(4, 8);
let lastplace = leaderboard.slice(-2);

// ----------------------------------------------------------

// Q10.
// What is the difference between these two?
// Predict both outputs, then run it.

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2));
console.log(arr.slice(-2));

// Your guess:
// slice(2)  → [3, 4, 5];
// slice(-2) → [4, 5];

// ----------------------------------------------------------

// Q11.
// You have a list of messages. A user wants to see
// only the most recent 3 messages.
// The LAST item is the most recent.
// Use slice() to get the last 3.

const messages = [
    "Hey!",
    "How are you?",
    "I am good.",
    "What are you doing?",
    "Just studying JS.",
    "Nice!"
];

// Your answer:

let recent = messages.slice(-3);

// ----------------------------------------------------------

// Q12.
// Use slice() to split this array into two halves.
// First half:  first 3 items
// Second half: remaining items
// Log both halves.

const students = ["Aman", "Priya", "Ravi", "Zara", "Om", "Neha"];

// Your answer:

let ha = students.slice(0, 3);
let lf = students.slice(-3);
console.log(ha);
console.log(lf);

// ----------------------------------------------------------

// Q13.
// What will this log? Think carefully.

const data = ["A", "B", "C", "D", "E"];
console.log(data.slice(10));
console.log(data.slice(1, 0));

// Your guess:
// slice(10)  → []
// slice(1,0) → []

// ----------------------------------------------------------

// Q14.
// You are given a long student list.
// Use slice() to get students for page 2.
// Each page shows 3 students.
// Page 1 → index 0–2
// Page 2 → index 3–5

const classList = [
    "Aman", "Priya", "Ravi",
    "Zara", "Om", "Neha",
    "Dev", "Sara", "Kiran"
];

// Your answer:

let pageone = classList.slice(0, 3);
let pagetwo = classList.slice(3, 6);
let pagethree = classList.slice(6, 10);

// ----------------------------------------------------------

// Q15.
// CHALLENGE — without using any method other than slice():
// Reverse the order of this array using two slice() calls and spread.
// Hint: slice the second half and first half separately, then combine.

const half = ["A", "B", "C", "D", "E", "F"];

// Your answer:

let one = half.slice(0, 3);
let two = half.slice(3, 7);
const reversed = [...two, ...one];

// ============================================================
//  SECTION 2 — splice() (Q16–Q30)
// ============================================================
//  QUICK REMINDER:
//  splice(start, deleteCount, ...itemsToInsert)
//  → CHANGES the original array
//  → removes deleteCount items from start
//  → optionally inserts new items at that position
//  → returns an array of the REMOVED items
// ============================================================

// Q16.
// What will this log? Trace through it manually.

const veggies = ["Carrot", "Broccoli", "Spinach", "Peas", "Corn"];
const removed = veggies.splice(1, 2);
console.log(removed);
console.log(veggies);

// Your trace:
// removed → ['Broccoli', 'Spinach'];
// veggies → ['Carrot', 'Peas', 'Corn'];

// ----------------------------------------------------------

// Q17.
// Remove only the LAST item using splice().
// Do NOT use pop(). Use splice() with a negative index.

const snacks = ["Chips", "Biscuits", "Chocolate", "Popcorn"];

// Your answer:

let unsnacked = snacks.splice(-1);

// ----------------------------------------------------------

// Q18.
// Remove ALL items from index 2 onwards.
// Log what was removed and the remaining array.

const playlist = ["Song1", "Song2", "Song3", "Song4", "Song5"];

// Your answer:

let archivedsongs = playlist.splice(2);
console.log(archivedsongs);
console.log(playlist);

// ----------------------------------------------------------

// Q19.
// Use splice() to INSERT "Wednesday" between "Tuesday" and "Thursday".
// Do NOT remove any existing items.

const weekdays = ["Monday", "Tuesday", "Thursday", "Friday"];

// Your answer:

weekdays.splice(2, 0, "Wednesday");

// ----------------------------------------------------------

// Q20.
// Use splice() to REPLACE "Ravi" with "Rahul" in this array.
// (Remove "Ravi" and insert "Rahul" in the same position.)

const names = ["Aman", "Ravi", "Priya", "Zara"];

// Your answer:

names.splice(1, 1, "Rahul");

// ----------------------------------------------------------

// Q21.
// What does splice() return when deleteCount is 0?
// Test it and explain.

const base = [1, 2, 3, 4, 5];
const result = base.splice(2, 0, 99);
console.log(result);
console.log(base);

// Your explanation:

// It will the shift the values by one index from the index you provided and add the value you listed

// ----------------------------------------------------------

// Q22.
// A student "Om" dropped out of this class list.
// Find his position using indexOf() and remove him using splice().

const classRoll = ["Aman", "Priya", "Om", "Zara", "Dev"];

// Your answer:

let locator = classRoll.indexOf("Om");
if (locator !== -1) {
    classRoll.splice(locator, 1);
}
console.log(classRoll);

// ----------------------------------------------------------

// Q23.
// What will this log? Guess before running.

const letters2 = ["A", "B", "C", "D", "E"];
letters2.splice(1, 0, "X", "Y");
console.log(letters2);
letters2.splice(3, 2);
console.log(letters2);

// Your guess:
// After first splice  → ['A', 'X', 'Y', 'B', 'C', 'D', 'E']
// After second splice → ['A', 'X', 'Y', 'D', 'E']

// ----------------------------------------------------------

// Q24.
// You have a to-do list. Complete these steps using splice():
// a) Remove "Watch TV" (it is at index 3)
// b) Insert "Read book" at index 2
// Log the list after each step.

const todos = ["Wake up", "Exercise", "Cook", "Watch TV", "Study"];

// Your answer:

todos.splice(3, 1);
console.log(todos);
todos.splice(2, 0, "Read book");
console.log(todos);

// ----------------------------------------------------------

// Q25.
// Use splice() to remove the middle item from this array.
// The array has 5 items — middle is index 2.
// Log the removed item and the remaining array.

const midArr = ["One", "Two", "Three", "Four", "Five"];

// Your answer:

let middle = midArr.splice(2, 1);
console.log("removed", " ", middle);
console.log("remaining", " ", midArr);

// ----------------------------------------------------------

// Q26.
// What is the difference between slice() and splice()?
// Fill in the blanks:
//
// slice()  → changes original? ______  returns? _______________
// splice() → changes original? ______  returns? _______________

// Your answer (in comments):

// slice()  → changes original? no  returns? new array
// splice() → changes original? yes  returns? original array


// ----------------------------------------------------------

// Q27.
// Use splice() to insert 3 items at the beginning of this array.
// Do NOT use unshift().

const tail = ["D", "E", "F"];

// Your answer:

tail.splice(0, 0, "A", "B", "C");

// ----------------------------------------------------------

// Q28.
// You are building a playlist manager.
// Current playlist: ["Song1", "Song2", "Song3", "Song4", "Song5"]
// Do all of these using splice():
// a) Remove "Song2" and "Song3"
// b) Insert "NewSong" where "Song2" used to be
// Log the final playlist.

const myPlaylist = ["Song1", "Song2", "Song3", "Song4", "Song5"];

// Your answer:

myPlaylist.splice(1, 2);
myPlaylist.splice(1, 0, "NewSong");
console.log(myPlaylist);

// ----------------------------------------------------------

// Q29.
// What will this code log? Trace carefully.

const stack = [10, 20, 30, 40, 50];
const a = stack.splice(0, 2);
const b = stack.splice(1, 1, 99);
console.log(a);
console.log(b);
console.log(stack);

// Your trace:
// a     → ['10', '20'];
// b     → ['40'];
// stack → ['30', '99', '50'];

// ----------------------------------------------------------

// Q30.
// CHALLENGE — use splice() to rotate this array LEFT by one position.
// Left rotation means the first item moves to the end.
// ["A", "B", "C", "D"] → ["B", "C", "D", "A"]
// Use splice() to remove the first item, then push it to the end.

const rotate = ["A", "B", "C", "D", "E"];

// Your answer:

let f = rotate.splice(0, 1);
rotate.push(f);

// ============================================================
//  SECTION 3 — forEach() (Q31–Q45)
// ============================================================
//  QUICK REMINDER:
//  array.forEach((item, index, array) => { ... })
//  → runs a function for EVERY item
//  → always returns undefined
//  → cannot be stopped early
//  → used for side effects (logging, DOM updates, totals)
// ============================================================

// Q31.
// Use forEach() to log every item in this array.

const animals = ["Lion", "Tiger", "Elephant", "Giraffe"];

// Your answer:

animals.forEach((animal) => {
    console.log(animal);
});

// ----------------------------------------------------------

// Q32.
// Use forEach() to log each item WITH its index.
// Format: "0: Lion"  "1: Tiger"  etc.

// Your answer (use the animals array above):

animals.forEach((animal, index) => {
    console.log(index, ": ", animal);
});

// ----------------------------------------------------------

// Q33.
// What will this log? Guess first.

const nums2 = [1, 2, 3, 4, 5];
const result2 = nums2.forEach((n) => n * 2);
console.log(result2);

// Your guess:

//  [undefined];

// ----------------------------------------------------------

// Q34.
// Use forEach() to calculate the SUM of all numbers.

const marks = [85, 90, 78, 92, 88];

// Your answer:

let m = 0;
const markup = marks.forEach((mark) => {
    m = m + mark;
});

// ----------------------------------------------------------

// Q35.
// Use forEach() to log only the EVEN numbers from this array.

const numbers = [3, 8, 15, 4, 22, 7, 10, 13];

// Your answer:

numbers.forEach((number) => {
    if(number % 2 == 0) {
        console.log(number);
    }
});

// ----------------------------------------------------------

// Q36.
// You have an array of student objects.
// Use forEach() to log:
// "Aman passed" or "Ravi failed" based on marks >= 50.

const classStudents = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 43 },
    { name: "Zara",  marks: 55 },
    { name: "Om",    marks: 38 },
];

// Your answer:

classStudents.forEach((student) => {
    if(student >= 50) {
        console.log(student, " passed");
    } else {
        console.log(student, " failed");
    }
});

// ----------------------------------------------------------

// Q37.
// Use forEach() to build a NEW array of doubled values.
// Start with an empty array and push inside forEach.

const original2 = [1, 2, 3, 4, 5];
const doubled = [];

// Your answer:

original2.forEach((num) => {
    doubled.push(num * 2);
});
console.log(doubled);

// ----------------------------------------------------------

// Q38.
// What is the difference between forEach() and a for loop?
// When would you choose one over the other?

// Your answer (in comments):

// forEach is used to go through every index in an array once, while a for loop goes through the entire array the amount of times listed

// ----------------------------------------------------------

// Q39.
// Use forEach() to count how many students scored above 80.

const examMarks = [72, 88, 55, 91, 65, 84, 49, 95];

// Your answer:

let count = 0
examMarks.forEach((score) => {
    if(score > 80) {
        count++;
    }
});
console.log("students who scored above 80: ", count);

// ----------------------------------------------------------

// Q40.
// Use forEach() to log a numbered list (1-based) of items.
// Format: "1. Apple"  "2. Banana"  etc.

const shoppingList = ["Apple", "Milk", "Bread", "Eggs", "Butter"];

// Your answer:

shoppingList.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
});

// ----------------------------------------------------------

// Q41.
// forEach() gives you access to the full array as the 3rd parameter.
// Use it to log whether each item is the last item or not.
// Format: "Apple - not last"  /  "Butter - last"

// Your answer (use shoppingList array above):

shoppingList.forEach((item, index, array) => {
    if(index === array.length -1) {
        console.log(item + " - last");
    } else {
        console.log(item + " - not last");
    }
});

// ----------------------------------------------------------

// Q42.
// Use forEach() to find the LARGEST number in this array.
// Store the result in a variable outside forEach.

const temps = [32, 45, 28, 67, 41, 55, 73, 36];

// Your answer:

let largest = temps[0];
temps.forEach((temp, index) => {
    if(temp > largest) {
        largest = temp;
    }
});

// ----------------------------------------------------------

// Q43.
// Use forEach() to log the prices with 18% GST added.
// Format: "Pen: ₹11.80"  (round to 2 decimal places using .toFixed(2))

const products = [
    { name: "Pen",      price: 10  },
    { name: "Notebook", price: 80  },
    { name: "Bag",      price: 500 },
    { name: "Ruler",    price: 20  },
];

// Your answer:

products.forEach((product) => {
    const priceGST = (product.price * 1.18).toFixed(2);
    console.log(product.name + ": ₹" + priceGST);
});

// ----------------------------------------------------------

// Q44.
// Can you break out of a forEach() loop early?
// Try to stop the loop when you hit the number 3.
// What happens? Explain.

const stopTest = [1, 2, 3, 4, 5];

stopTest.forEach((n) => {
    if (n === 3) {
        // try to stop here
    }
    console.log(n);
});

// Your explanation of what happens:

// It skips the rest of that one iteration and continue printing the rest

// ----------------------------------------------------------

// Q45.
// CHALLENGE — use forEach() to do ALL of the following in one loop:
// Given the students array below:
// a) Count how many passed (marks >= 50)
// b) Count how many failed
// c) Calculate the total marks
// d) Log each student's result: "Aman: 85 - PASS"
// After the loop, log: total, pass count, fail count, and average.

const finalStudents = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 43 },
    { name: "Zara",  marks: 55 },
    { name: "Om",    marks: 38 },
    { name: "Neha",  marks: 76 },
];

// Your answer:

let passedcount = 0;
let failedcount = 0;
let totalmarks = 0;
let average = 0;
finalStudents.forEach((student) => {
    const status = student.marks >= 50 ? "pass": "fail";
    console.log(student.name + ": " + student.marks + " - " + status);
    if(marks >= 50) {
        passedcount++;
    } else {
        failedcount++;
    };
    totalmarks = totalmarks + student.marks;
});
average = (totalmarks / finalStudents.length).toFixed(2);
console.log("Total marks: " + totalmarks + " - " + "Passed count: " + passedcount + " - " + "Failed count: " + failedcount + " - " + "Average: "+ average);

// ============================================================
//  SECTION 4 — Mixed: slice + splice + forEach (Q46–Q50)
// ============================================================

// Q46.
// Use slice() to get the first 3 students.
// Then use forEach() to log each of their names.

const allStudents = ["Aman", "Priya", "Ravi", "Zara", "Om", "Neha"];

// Your answer:

let firstthree = allStudents.slice(0, 3);
firstthree.forEach((name) => {
    console.log(name);
});

// ----------------------------------------------------------

// Q47.
// Use splice() to remove "Ravi" from the list below.
// Then use forEach() to log the remaining names with their index.

const group = ["Aman", "Priya", "Ravi", "Zara", "Om"];

// Your answer:

let raviIndex = group.indexOf("Ravi");
if(raviIndex !== -1) {
    group.splice(raviIndex, 1);
}
group.forEach((name, index) => {
    console.log((index + 1) + " : " + name);
});

// ----------------------------------------------------------

// Q48.
// You have a marks array.
// a) Use slice() to get marks from index 2 to 5
// b) Use forEach() on that slice to log each mark
//    and whether it is a pass (>= 50) or fail

const allMarks = [45, 78, 90, 55, 32, 88, 60, 72];

// Your answer:

let piece = allMarks.slice(2, 6);
piece.forEach((mark) => {
    const status = mark >= 50 ? "pass" : "fail";
    console.log(mark + " : " + status);
})

// ----------------------------------------------------------

// Q49.
// TRACE — predict the output of this entire block.
// Do not run it until you have written your full prediction.

const arr2 = ["A", "B", "C", "D", "E", "F"];
const sliced = arr2.slice(1, 4);
sliced.splice(1, 1, "X");
sliced.forEach((item, i) => {
    console.log(i + ": " + item);
});
console.log(arr2);

// Your prediction:

// 1 - ['B', 'C', 'D']
// 2 - ['B', 'X', 'D']
// 3 - 
// 0: 'B'   
// 1: 'X'   
// 2: 'D'
// 4 - ["A", "B", "C", "D", "E", "F"]

// ----------------------------------------------------------

// Q50. — FINAL CHALLENGE
// You are managing a class result system.
// Given this array of students:

const resultList = [
    { name: "Aman",    marks: 85 },
    { name: "Priya",   marks: 92 },
    { name: "Ravi",    marks: 43 },
    { name: "Zara",    marks: 67 },
    { name: "Om",      marks: 38 },
    { name: "Neha",    marks: 76 },
    { name: "Dev",     marks: 55 },
    { name: "Sara",    marks: 91 },
    { name: "Kiran",   marks: 29 },
    { name: "Meena",   marks: 80 },
];

// Do ALL of the following:
// a) Use slice() to get only the first 6 students
// b) Use splice() to remove any student from the slice
//    whose marks are below 50 (check index 2 and 4 — Ravi and Om)
//    Remove them one by one. Be careful — after removing one,
//    indexes shift! Remove the higher index first.
// c) Use forEach() on the final list to log:
//    "Rank 1: Aman - 85 marks"  etc. (1-based rank)

// Your answer:

const topsix = resultList.slice(0, 6);
topsix.splice(4, 1);
topsix.splice(2, 1);
topsix.forEach((student, index) => {
    console.log("Rank " + (index + 1) + ": " + student.name + " - " + student.marks + " marks");
});
