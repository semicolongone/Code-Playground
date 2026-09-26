// ============================================================
//  practice-dom-arrays.js
//  Topics: All Array Methods + DOM APIs
//  Format: Read each question, open the matching HTML file
//          in a browser, and write your JS answers there.
//          For pure array questions, answer directly below.
// ============================================================
//  HOW TO USE THIS FILE:
//  - Questions marked [JS]  → answer directly in this file
//  - Questions marked [DOM] → answer in the HTML file
//  - Questions marked [BOTH]→ answer needs both
// ============================================================



// ============================================================
//  SECTION 1 — Array Basics + DOM (Q1–Q10)
// ============================================================

// Q1. [JS]
// Create an array of 5 student names.
// Log the first, last, and middle item.
// Do NOT hardcode the last index.

// Your answer:

const students = ["Sarah", "Tom", "Ben", "Jerry", "Paul"];
console.log(students[0]);
console.log(students[Math.floor(students.length / 2)]);
console.log(students[students.length - 1]);

// ----------------------------------------------------------

// Q2. [JS]
// Given this array, do the following using ONE line each:
// a) Change "Banana" to "Mango"
// b) Log the length
// c) Log whether it is an array (use Array.isArray)

const fruitArr = ["Apple", "Banana", "Kiwi", "Grape"];

// Your answer:

fruitArr.splice(1, 1, "Mango");
console.log(fruitArr.length());
console.log(Array.isArray(fruitArr));

// ----------------------------------------------------------

// Q3. [JS]
// What will this log? Write your answer as a comment
// before running it.

const items = ["a", "b", "c", "d", "e"];
console.log(items[items.length]);
console.log(items[items.length - 1]);
console.log(items.at(-2));

// Your guess:
// items[items.length]     → undefined
// items[items.length - 1] → "e"
// items.at(-2)            → "d"

// ----------------------------------------------------------

// Q4. [JS]
// Create an array of 3 student objects.
// Each object should have: name, marks, city.
// Log the name of the highest scoring student
// without using any array method — just indexing.

// Your answer:

const classroom = [{name: "John", marks: 87, city: "Delhi"}, {name: "Sarah", marks: 74, city: "Conway"}, {name: "Tom", marks: 95, city: "Little Rock"}];
console.log(classroom[2].name);

// ----------------------------------------------------------

// Q5. [DOM]
// Open the HTML file.
// Select the element with id="title" using getElementById.
// Change its textContent to "JavaScript Practice".
// Then change its style.color to "#60a5fa".

// Write your DOM code here (you can test it in browser console):
// const title = ...

const titleEl = document.getElementById("title");
titleEl.textContent = "javascript practice";
titleEl.style.color = "#60a5fa";

// ----------------------------------------------------------

// Q6. [DOM]
// Create a new <li> element.
// Set its textContent to "New Item".
// Append it to the <ul> with id="my-list".

// Write your DOM code here:

const myList = document.createElement("li");
myList.textContent = "New Item";
document.getElementById("my-list").appendChild(myList);

// ----------------------------------------------------------

// Q7. [DOM]
// Select ALL elements with class="card" using querySelectorAll.
// Loop through them with forEach.
// Add the class "highlight" to each one using classList.add.

// Write your DOM code here:

const allEl = document.querySelectorAll("card");
allEl.forEach((c) => c.classList.add("highlight"));

// ----------------------------------------------------------

// Q8. [DOM]
// Select the button with id="toggle-btn".
// Add a click event listener.
// Every time it is clicked, toggle the class "active"
// on the div with id="box" using classList.toggle.

// Write your DOM code here:

const buttonEl = document.getElemementById("toggle-btn");
const box = document.getElementById("box");
buttonEl.addEventListener("click", () => {
    box.classList.toggle("active");
});

// ----------------------------------------------------------

// Q9. [JS]
// What is the difference between innerHTML and textContent?
// When would you use each?
// Answer in comments below.

// innerHTML:
// it gets/sets the html inside an element, including tags

// textContent:
// it only gets/sets the plain text inside an element

// When to use innerHTML:
// when you are building html strings with tags(cards, table rows, lists)
// when you control the content yourself, not from user input

// When to use textContent:
// when you are setting simple texts(names, numbers, messages)
// when content comes from user input, always use textContent to stay safe

// ----------------------------------------------------------

// Q10. [BOTH]
// You have this array:
const colorList = ["red", "blue", "green", "yellow", "purple"];

// a) [JS] Use map() to convert all to uppercase.
// b) [DOM] For each color, create a <span> element,
//    set its textContent to the color name,
//    set its style.color to the color value,
//    and append it to id="color-display".

// Your answer:

const colorDisplay = colorList.map((c) => c.toUpperCase());
const colorDis = document.getElementById("color-display");
colorList.forEach((c) => {
    const span = document.createElement("span")
    span.textContent = color;
    span.style.color = color;
    colorDis.appendChild(span);
});

// ============================================================
//  SECTION 2 — push / pop / shift / unshift + DOM (Q11–Q20)
// ============================================================

// Q11. [JS]
// Start with an empty array called notifications.
// Push: "New message", "Friend request", "System update"
// Pop the last one and log what was removed.
// Log the final array.

// Your answer:

const notifications = [];
notifications.push("New message");
notifications.push("Friend request");
notifications.push("System update");
console.log(notifications.pop());
console.log(notifications);

// ----------------------------------------------------------

// Q12. [JS]
// What will this log? Trace through it manually.

const stack = [];
stack.push("A"); // ["A"]
stack.push("B"); // ["A", "B"]
stack.push("C"); // ["A", "B", "C"]
const x = stack.pop(); // ["A", "B"]
stack.unshift("Z"); // ["Z", "A", "B"]
const y = stack.shift(); // ["A", "B"]
stack.push("D"); // ["A", "B", "D"]

console.log(stack);
console.log(x);
console.log(y);

// Your trace:

// stack → ["A", "B", "D"]
// x     → "C"
// y     → "Z"

// ----------------------------------------------------------

// Q13. [JS]
// Simulate a "Recently Viewed" list.
// Rules:
// - Max 4 items at a time
// - New items go to the FRONT (unshift)
// - If adding a new item exceeds 4, remove from the END (pop)
// - Do NOT add duplicates (use includes)
// Add these pages one by one: "Home", "About", "Shop", "Blog", "Contact", "Shop"
// Log the list after each addition.

// Your answer:

const recentlyViewed = [];
function addToRecent(page) {
    if (recentlyViewed.includes(page)) {
        console.log(`"${page}" already in list - skipped`);
        return;
    }
    recentlyViewed.unshift(page);
    if (recentlyViewed.length > 4) {
        recentlyViewed.pop();
    }
    console.log([...recentlyViewed]);
}
addToRecent("Home");
addToRecent("About");
addToRecent("Shop");
addToRecent("Blog");
addToRecent("Contact");
addToRecent("Shop");

// ----------------------------------------------------------

// Q14. [DOM]
// Build a notification banner system in your HTML.
// Each time "Add Notification" button is clicked:
// - push a message to a notifications array
// - create a <div> with that message
// - append it to id="notif-container"
// When "Clear Last" is clicked:
// - pop from the array
// - remove the last child from id="notif-container"
//   using lastChild.remove()

// Write your DOM code here:

const notifBanner = [];
function addNotif(message) {
    notifBanner.push(message);
    const div = document.createElement("div");
    document.getElementById("notif-container").appendChild(div);
}
function clearLastNotif() {
    if (notifBanner.length === 0) {
        return;
    }
    notifBanner.pop();
    const last = document.getElementById("notif-container");
    if (last.lastChild) {
        last.lastChild.remove();
    }
}

// ----------------------------------------------------------

// Q15. [JS]
// You have a print queue:
const printQueue = ["Doc1", "Doc2", "Doc3", "Doc4"];

// a) A new urgent document needs to print FIRST — add it using unshift
// b) Doc2 is cancelled — remove it. But you can only use shift and push.
//    Think: how do you remove the second item using only these two methods?
//    Hint: shift the first item, push it back, then shift again.
// c) Log the final queue.

// Your answer:

printQueue.unshift("Urgent");
const cancelled = printQueue.shift();
printQueue.push(cancelled);
const cancelledTwo = printQueue.shift();
printQueue.push(cancelledTwo);
printQueue.shift();
console.log(printQueue);

// ----------------------------------------------------------

// Q16. [BOTH]
// Create an array: const taskList = []
// Build a simple task manager:
// - Input + "Add Task" button → push task to array, render list
// - "Remove First" button → shift from array, remove first li from DOM
// - "Remove Last" button → pop from array, remove last li from DOM
// - Show the array length in a counter element

// Write your JS + DOM code here:

const taskList = [];
function renderTaskList() {
    const taskUl = document.getElementById("task-ul");
    taskUl.innerHTML = "";
    taskList.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task;
        taskUl.append(li);
    });
    document.getElementById("task-counter").textContent = taskList.length;
}
function addTask() {
    const val = document.getElementById("task-input").value.trim();
    if (!val ) return;
    taskList.push(val);
    document.getElementById("task-input").value = "";
    renderTaskList();
}
function removeFirst() {
    if (taskList.length === 0) return;
    taskList.shift();
    renderTaskList();
}
function removeLast() {
    if (taskList.length === 0) return;
    taskList.pop();
    renderTaskList();
}

// ----------------------------------------------------------

// Q17. [JS]
// What does push() return? What does pop() return?
// What does unshift() return? What does shift() return?
// Test each one and log the return values with labels.

const testArr = ["X", "Y", "Z"];

// Your answer:

const x1 = testArr.push("W"); // ["X", "Y", "Z", "W"]
const y2 = testArr.pop(); // ["X", "Y", "Z"]
const z3 = testArr.unshift("W"); // ["W", "X", "Y", Z"]
const w4 = testArr.shift(); // ["X", "Y", "Z"]

// ----------------------------------------------------------

// Q18. [JS]
// Fix the bugs in this code. There are 4 bugs.
// Write the corrected version below.

// const bugArr = ["Red, Green, Blue"];
// bugArr.Push("Yellow");
// console.log(bugArr.length()); // length is a property, not method
// bugArr.Pop();
// console.log(bugArr[3]);       // wrong index for 3-item array

// Fixed version:

const bugArr = ["Red", "Green", "Blue"];
bugArr.push("Yellow");
console.log(bugArr.length);
bugArr.pop()
console.log(bugArr[2]);

// ----------------------------------------------------------

// Q19. [JS]
// Use shift() in a while loop to process all items
// in this work queue one by one.
// Log: "Processing: Doc1", "Processing: Doc2" etc.
// After the loop, confirm the queue is empty.

const workQueue = ["Doc1", "Doc2", "Doc3", "Doc4", "Doc5"];

// Your answer:

while (workQueue.length > 0) {
    const nextInQueue = workQueue.shift()
    console.log("Processing: " + nextInQueue)
}
console.log(workQueue);
console.log("Queue Empty", workQueue.length === 0)

// ----------------------------------------------------------

// Q20. [BOTH]
// Implement a browser history simulation:
// - historyArr = []
// - "Visit Page" input + button → push URL to array, render history list
// - "Go Back" button → pop from array, remove last li from DOM,
//   show the current page (last item after pop) in id="current-page"
// - On page load show "No history yet" in current-page

// Write your JS + DOM code here:

const historyArr = [];
document.getElementById("current-page").textContent = "No history yet";
function visitPage() {
    const url = document.getElementById("url-input").value.trim();
    if (!url) return;
    historyArr.push(url);
    document.getElementById("url-input").value = "";
    const li = document.createElement("li");
    li.textContent = url;
    document.getElementById("history-list").appendChild(li);
    document.getElementById("current-page").textContent = url;
}
function goBack() {
    if (historyArr.length === 0) return;
    historyArr.pop;
    const histList = document.getElementById("history-list");
    if (histList.lastChild) histList.lastChild.remove();
    const current = historyArr[historyArr.length-1];
    document.getElementById("current-page").textContent = current || "No history yet";
}
// ============================================================
//  SECTION 3 — includes / indexOf / slice / splice (Q21–Q30)
// ============================================================

// Q21. [JS]
// Given this array, answer each question using includes() or indexOf():
const subjects = ["Maths", "Science", "English", "History", "Science"];

// a) Is "Science" in the array? (true/false)
// b) Is "Art" in the array?
// c) At what index is the FIRST "Science"?
// d) At what index is the SECOND "Science"? (use startIndex param)
// e) At what index is "Art"? What does this tell you?

// Your answer:

console.log(subjects.includes("Science"));
console.log(subjects.includes("Art"));
console.log(subjects.indexOf("Science"));
console.log(subjects.indexOf("Science", 2));
console.log(subjects.indexOf("Art")); // -1

// ----------------------------------------------------------

// Q22. [JS]
// What will this log? Trace manually.

const nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.slice(2, 5));
console.log(nums.slice(-3));
console.log(nums.slice(1, 1));
console.log(nums.slice(10));

// Your trace:
// slice(2, 5) → ["30", "40", "50"]
// slice(-3)   → ["50", "60", "70"]
// slice(1, 1) → []
// slice(10)   → []

// ----------------------------------------------------------

// Q23. [JS]
// Use slice() to implement pagination.
// pageSize = 3, show page 1, page 2, and page 3 separately.

const allStudents = [
    "Aman", "Priya", "Ravi", "Zara", "Om",
    "Neha", "Dev", "Sara", "Kiran", "Meena"
];
const pageSize = 3;

// Your answer:

function getPage(page) {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    return allStudents.slice(start, end);
}

getPage(1);

// ----------------------------------------------------------

// Q24. [JS]
// Use splice() to:
// a) Remove "Om" from this array (find its index first)
// b) Insert "Rahul" between "Priya" and "Ravi"
// c) Replace "Neha" with "Nisha"
// Log after each step.

const classArr = ["Aman", "Priya", "Ravi", "Om", "Neha", "Dev"];

// Your answer:

const om = classArr.indexOf("Om");
console.log(classArr.splice(om, 1));
console.log(classArr.splice(2, 0, "Rahul"));
const iea = classArr.indexOf("Neha");
console.log(classArr.splice(iea, 1, "Nisha"));

// ----------------------------------------------------------

// Q25. [JS]
// What is the difference between slice() and splice()?
// Complete this comparison table in comments:

//               slice()         splice()
// Mutates?      no             yes
// Returns?      array of removed items             array of new items
// Arguments?    (start, end)             (start, delete, ...item)
// Use for?      to extract, copy, or page             remove, replace, add something

// ----------------------------------------------------------

// Q26. [JS]
// Fix this common splice() mistake.
// The goal is to remove "Banana" AND "Mango" from the array.

const wrongSplice = ["Apple", "Banana", "Mango", "Grape"];
wrongSplice.splice(1, 1); // only removes Banana
wrongSplice.splice(2, 1); // tries to remove Mango but removes Grape!
// Why is this wrong? Fix it.

// Your explanation:

// the indexes shift after Banana is removed, so Grape becomes the second index instead of Mango

// Fixed code:

const fixedOne = ["Apple", "Banana", "Mango", "Grape"];
fixedOne.splice(1, 2);

// ----------------------------------------------------------

// Q27. [BOTH]
// Build a live search using includes():
// - searchData array contains 20 country names
// - Input field listens for "input" event
// - Filter countries where name.toLowerCase().includes(typed text)
// - Render filtered results as <div> elements in id="search-results"
// - Show result count in id="result-count"

const searchData = [
    "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Brazil", "Britain", "Canada", "Chile", "China",
    "Denmark", "Egypt", "Finland", "France", "Germany",
    "Greece", "Japan", "Mexico", "Nepal", "Nigeria"
];

// Write your JS + DOM code here:

function liveSearch(list) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
    list.forEach((country) => {
        const div = document.createElement("div");
        div.textContent = country;
        div.style.padding = "27.2px";
        div.style.background = "red";
        container.appendChild(div);
    });
    document.getElementById("result-count").textContent = list.length;
}
liveSearch(searchData);
document.getElementById("search-input-Q27").addEventListener("input", function() {
    const val = this.value.toLowerCase();
    const matches = searchData.filter((c) => c.toLowerCase().includes(val));
    liveSearch(matches);
})
// ----------------------------------------------------------

// Q28. [JS]
// Use indexOf() + splice() to remove ALL occurrences
// of a specific value from an array.
// Remove all "X" from this array:

const withX = ["A", "X", "B", "X", "C", "X", "D"];
// Expected result: ["A", "B", "C", "D"]

// Hint: use a while loop with indexOf to keep finding and removing

// Your answer:

while (withX.indexOf("X") !== -1) {
    const index = withX.indexOf("X").splice(index, 1);
}
console.log(withX);

// ----------------------------------------------------------

// Q29. [JS]
// Use slice() + spread to insert an item at any index
// WITHOUT using splice().
// Insert "NEW" at index 2 in this array:
// ["A", "B", "C", "D", "E"] → ["A", "B", "NEW", "C", "D", "E"]

const sliceInsert = ["A", "B", "C", "D", "E"];

// Your answer:

const inserted = [...sliceInsert.slice(0, 2), "NEW", ...sliceInsert.slice(2)];
console.log(inserted);

// ----------------------------------------------------------

// Q30. [BOTH]
// Build a reorderable list:
// - Render arr as a list with "Move Up" and "Move Down" buttons per item
// - Move Up: splice the item out, splice it back one position earlier
// - Move Down: splice the item out, splice it back one position later
// - Re-render the list after every move

const reorderArr = ["Task 1", "Task 2", "Task 3", "Task 4"];

// Write your JS + DOM code here:

function reorderList() {
    const ul = document.getElementById("reorder-list");
    ul.innerHTML = reorderArr.map((task, i) => `
    <li style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span>${task}</span>
            <button onclick="moveUp(${i})">↑</button>
            <button onclick="moveDown(${i})">↓</button>
        </li>
    `
).join("");
}
function moveUp(i) {
    if (i === 0) return;
    const item = reorderArr.splice(i, 1)[0];
    reorderArr.splice(i-1, 0, item);
    reorderList();
}
function moveDown() {
    if (i === reorderArr.length -1) return;
    const item = reorderArr.splice(i, 1)[0];
    reorderArr.splice(i+1, 0, item);
    reorderList();
}

// ============================================================
//  SECTION 4 — forEach / map / filter (Q31–Q40)
// ============================================================

// Q31. [JS]
// Use forEach() to:
// a) Log each name with its 1-based position: "1. Aman"
// b) Calculate the total of all marks
// c) Count how many scored above 80

const studentData = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 43 },
    { name: "Zara",  marks: 78 },
    { name: "Om",    marks: 38 },
];

// Your answer:

studentData.forEach((s, i) => {
    console.log((i+1) + "." + s.name);
});
const totalmarks = 0;
studentData.forEach((s) => {
    totalmarks += s.marks;
});
console.log(totalmarks);
const count = 0;
studentData.forEach((s) => {
    if (s.marks > 80) count++;
});
console.log(count);

// ----------------------------------------------------------

// Q32. [JS]
// What will this log?

const mapTest = [1, 2, 3].map((n) => {
    if (n === 2) return n * 10;
});
console.log(mapTest);

// Your guess: [undefined, 20, undefined]
// Explanation: This is a case of partial return, only some cases have the return statement, so no return statement means function returns undefined. Map puts undefined in the new array for those items. Only n === 2 returns a value. Always returns something in every path of map() callback.


// ----------------------------------------------------------

// Q33. [JS]
// Use map() to transform this cart array.
// Return a new array where each item has:
// name, originalPrice, discountedPrice (10% off), saved (difference)

const cartData = [
    { name: "Laptop", price: 50000 },
    { name: "Phone",  price: 30000 },
    { name: "Tablet", price: 20000 },
];

// Your answer:

const discountCart = cartData.map((item) => {
    const discountedPrice = item.price * 0.9;
    return {
        name: item.name,
        originalprice: item.price,
        discountedprice: discountedPrice,
        saved: item.price - discountedPrice,
    }
});
console.log(discountCart);

// ----------------------------------------------------------

// Q34. [JS]
// Use filter() to:
// a) Get all students from Delhi
// b) Get all students who passed AND are from Mumbai
// c) Remove all students with marks below 50 (return a clean array)

const cityStudents = [
    { name: "Aman",  marks: 85, city: "Delhi"  },
    { name: "Priya", marks: 92, city: "Mumbai" },
    { name: "Ravi",  marks: 43, city: "Delhi"  },
    { name: "Zara",  marks: 78, city: "Mumbai" },
    { name: "Om",    marks: 38, city: "Jaipur" },
    { name: "Neha",  marks: 76, city: "Delhi"  },
];

// Your answer:

const Delhi = cityStudents.filter((s) => s.city === "Delhi");
console.log(Delhi.map((s) => s.name));
const MumbaiPassed = cityStudents.filter((s) => s.marks >= 50 && s.city === "Mumbai");
console.log(MumbaiPassed.map((s) => s.name));
const onlyPassed = cityStudents.filter((s) => s.marks >= 50);
console.log(onlyPassed.map((s) => s.name));

// ----------------------------------------------------------

// Q35. [JS]
// Chain filter() and map() together.
// Step 1: filter students who passed (marks >= 50)
// Step 2: map to get strings like "Aman scored 85"
// Step 3: join with "\n" and log

// Your answer (use cityStudents from Q34):


// ----------------------------------------------------------

// Q36. [DOM]
// Use map() to render a product card grid.
// For each product in this array, create an HTML card string.
// Set id="product-grid" innerHTML to all cards joined.
// Each card should show: name, price with ₹, and a "Buy" button.

const productGrid = [
    { name: "Pen",    price: 20  },
    { name: "Book",   price: 150 },
    { name: "Bag",    price: 800 },
    { name: "Ruler",  price: 25  },
    { name: "Eraser", price: 10  },
];

// Write your code here:


// ----------------------------------------------------------

// Q37. [DOM]
// Use filter() + forEach() to build a filtered list.
// Render all items from taskData in id="all-tasks".
// When "Show Completed" is clicked — filter where done===true,
//   clear innerHTML, re-render only completed tasks.
// When "Show Pending" is clicked — filter where done===false, re-render.
// When "Show All" is clicked — render everything.

const taskData = [
    { title: "Buy groceries",  done: true  },
    { title: "Study arrays",   done: false },
    { title: "Exercise",       done: true  },
    { title: "Read book",      done: false },
    { title: "Cook dinner",    done: true  },
];

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q38. [JS]
// What is the difference between map() and forEach()?
// Answer these specific questions:

// Q: Does map() return anything useful?
// A:

// Q: Does forEach() return anything useful?
// A:

// Q: Can you chain .filter() after .forEach()?
// A:

// Q: Can you chain .filter() after .map()?
// A:

// Q: When would you use forEach instead of map?
// A:

// ----------------------------------------------------------

// Q39. [JS]
// Use filter() to remove duplicate values from an array.
// Explain how the indexOf trick works.

const dupArr = [1, 2, 2, 3, 4, 4, 4, 5, 1, 3];

// Your answer:
// Explanation of how it works:


// ----------------------------------------------------------

// Q40. [BOTH]
// Build a live filter UI:
// - Render all cityStudents (Q34) in a table on page load
// - Three buttons: "All", "Delhi", "Mumbai"
// - Clicking a button filters the array and re-renders the table
// - Active button gets class "active" via classList
// - Show count of visible students in a counter

// Write your JS + DOM code here:




// ============================================================
//  SECTION 5 — find / findIndex / some / every (Q41–Q48)
// ============================================================

// Q41. [JS]
// Use find() and findIndex() together.
// Given studentData (Q31):
// a) find() — the first student with marks > 80
// b) findIndex() — the index of that student
// c) Use the index to update their marks by +5
// d) Log the updated studentData

// Your answer:


// ----------------------------------------------------------

// Q42. [JS]
// What will this log? Explain each result.

const findTest = [10, 20, 30, 40, 50];
console.log(findTest.find((n) => n > 25));
console.log(findTest.find((n) => n > 100));
console.log(findTest.findIndex((n) => n > 25));
console.log(findTest.findIndex((n) => n > 100));

// Your explanation:
// find(n > 25)      →      because:
// find(n > 100)     →      because:
// findIndex(n > 25) →      because:
// findIndex(n > 100)→      because:


// ----------------------------------------------------------

// Q43. [JS]
// Use some() and every() to validate this shopping cart.
// a) every() — are ALL items in stock? (stock > 0)
// b) some()  — is ANY item's price above 1000?
// c) every() — does every item have a name property?
// d) some()  — is any item out of stock?

const shopCart = [
    { name: "Pen",    price: 20,   stock: 50  },
    { name: "Laptop", price: 55000, stock: 3   },
    { name: "Book",   price: 200,  stock: 0   },
    { name: "Bag",    price: 800,  stock: 10  },
];

// Your answer:


// ----------------------------------------------------------

// Q44. [JS]
// What will this log? Think carefully about empty arrays.

console.log([].every((n) => n > 0));
console.log([].some((n) => n > 0));
console.log([].find((n) => n > 0));
console.log([].findIndex((n) => n > 0));

// Your guess:
// every  →      explanation:
// some   →      explanation:
// find   →      explanation:
// findIndex →   explanation:


// ----------------------------------------------------------

// Q45. [JS]
// Use find() safely — always handle the undefined case.
// Search for a product by name in shopCart (Q43).
// If found — log its price.
// If NOT found — log "Product not found".
// Test with both "Pen" and "Phone".

// Your answer:


// ----------------------------------------------------------

// Q46. [DOM]
// Build a user access checker:
// - allowedUsers array contains names who can access the system
// - Input + "Check Access" button
// - Use some() to check if typed name exists (case-insensitive)
// - If yes — show "Access Granted" in green in id="access-result"
// - If no  — show "Access Denied" in red

const allowedUsers = ["Aman", "Priya", "Sara", "Dev", "Admin"];

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q47. [BOTH]
// Build a form validator using every():
// - Form has: name, email, phone, city inputs
// - "Validate" button
// - Use Object.values() on the form data object + every()
//   to check all fields are filled (length > 0)
// - Show "Form is valid" or "Please fill all fields"
//   in id="form-result"
// - Also use some() to check if any field is empty
//   and highlight those specific inputs with a red border

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q48. [JS]
// CHALLENGE — use find(), findIndex(), some(), every() together.
// Given this array of orders:

const orders = [
    { id: 101, item: "Book",   total: 200,  paid: true  },
    { id: 102, item: "Bag",    total: 850,  paid: false },
    { id: 103, item: "Pen",    total: 50,   paid: true  },
    { id: 104, item: "Laptop", total: 55000, paid: false },
];

// a) find() — find order with id 102, log its total
// b) findIndex() — find where id 104 is, mark it as paid: true
// c) every() — are all orders now paid?
// d) some() — is any order total above 10000?
// e) Log a summary of all results

// Your answer:




// ============================================================
//  SECTION 6 — reduce / sort / reverse / flat / join / split (Q49–Q58)
// ============================================================

// Q49. [JS]
// Use reduce() for ALL of these on one pass through studentData (Q31):
// - total marks
// - pass count (marks >= 50)
// - fail count
// - highest mark
// Use ONE reduce() call with an object as the accumulator.

// Your answer:


// ----------------------------------------------------------

// Q50. [JS]
// What will this log? The initialValue matters.

console.log([1, 2, 3].reduce((acc, n) => acc + n));
console.log([1, 2, 3].reduce((acc, n) => acc + n, 0));
console.log([1, 2, 3].reduce((acc, n) => acc + n, 10));
console.log(["a","b","c"].reduce((acc, s) => acc + s, ""));

// Your guess:
// no initialValue →
// initialValue 0  →
// initialValue 10 →
// string reduce   →

// ----------------------------------------------------------

// Q51. [JS]
// Sort these arrays correctly. Fix the broken sorts.

const sortNums = [5, 100, 2, 50, 1, 200];
const sortNames = ["Zara", "Aman", "Priya", "Om", "Ravi"];

// a) Sort numbers ascending — do it correctly (not as strings)
// b) Sort numbers descending
// c) Sort names A → Z
// d) Sort names Z → A
// e) Sort WITHOUT changing the originals (use spread)

// Your answer:


// ----------------------------------------------------------

// Q52. [JS]
// Sort this array of objects by TWO criteria:
// First sort by city (A → Z).
// If city is the same, sort by marks (highest first).

const multiSort = [
    { name: "Aman",  city: "Delhi",  marks: 85 },
    { name: "Priya", city: "Mumbai", marks: 92 },
    { name: "Ravi",  city: "Delhi",  marks: 78 },
    { name: "Zara",  city: "Mumbai", marks: 88 },
    { name: "Om",    city: "Delhi",  marks: 91 },
];

// Your answer:


// ----------------------------------------------------------

// Q53. [JS]
// Use reverse() carefully.
// a) Reverse this array safely (original untouched)
// b) Prove the original is unchanged
// c) Explain why rev === original would be true if you reversed without copying

const origArr = [1, 2, 3, 4, 5];

// Your answer:


// ----------------------------------------------------------

// Q54. [JS]
// Use split() and join() to do each of these:
// a) Split "Aman,Priya,Ravi,Zara" into an array
// b) Join ["Hello", "World", "JS"] with " → "
// c) Replace all spaces in "Hello World from JS" with underscores
// d) Reverse the words in "JavaScript is amazing"
// e) Check if "racecar" is a palindrome

// Your answer:


// ----------------------------------------------------------

// Q55. [JS]
// Use flat() with different depths.
// Predict the output first, then verify.

const flatTest = [1, [2, 3], [4, [5, 6]], [7, [8, [9]]]];
console.log(flatTest.flat());
console.log(flatTest.flat(2));
console.log(flatTest.flat(Infinity));

// Your guess:
// flat()          →
// flat(2)         →
// flat(Infinity)  →

// ----------------------------------------------------------

// Q56. [JS]
// CHAIN CHALLENGE — use 5 methods in one chain.
// Given this nested data:

const nested = [
    [{ name: "Aman", marks: 85 }, { name: "Ravi", marks: 43 }],
    [{ name: "Priya", marks: 92 }, { name: "Om", marks: 38 }],
    [{ name: "Zara", marks: 78 }, { name: "Dev", marks: 55 }],
];

// Step 1: flat()   — flatten into one array of objects
// Step 2: filter() — keep only students who passed (marks >= 50)
// Step 3: map()    — extract just the names
// Step 4: sort()   — alphabetically
// Step 5: join()   — join with " | "
// Log the final string

// Your answer:


// ----------------------------------------------------------

// Q57. [BOTH]
// Build a CSV parser and renderer:
// - Parse this CSV string into an array of objects
// - Render as a table in id="csv-table"
// - Add a "Sort by Marks" button that re-renders sorted

const csvString = "Aman,85,Delhi|Priya,92,Mumbai|Ravi,43,Delhi|Zara,78,Jaipur|Om,38,Chennai";

// Hint:
// Step 1: split("|") → array of row strings
// Step 2: map() each row → split(",") → { name, marks, city }
// Step 3: marks = Number(marks)
// Step 4: render as table rows

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q58. [JS]
// MEGA CHALLENGE — use reduce() to group students by city.
// Result should be:
// {
//   Delhi:   [{ name:"Aman", marks:85 }, ...],
//   Mumbai:  [{ name:"Priya", marks:92 }, ...],
//   Jaipur:  [...]
// }
// Then log the count of students in each city.

// Your answer (use cityStudents from Q34):




// ============================================================
//  SECTION 7 — Full DOM Projects (Q59–Q65)
// ============================================================

// Q59. [DOM]
// Build a COUNTER app using DOM APIs only.
// - Display a number starting at 0 in id="counter-display"
// - Three buttons: Increment, Decrement, Reset
// - Increment adds 1, Decrement subtracts 1, Reset sets to 0
// - Color the number green if positive, red if negative, white if 0
// - Use style.color to update the colour

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q60. [BOTH]
// Build a TO-DO LIST using arrays + DOM.
// - tasks = [] array holds all tasks as objects: { title, done }
// - "Add" button → push to tasks, renderTasks()
// - "Complete" button on each task → toggle done using findIndex()
//   + classList.toggle("done") on the li
// - "Delete" button on each task → splice using findIndex(), remove li
// - "All / Active / Completed" filter buttons → filter tasks, re-render
// - Show total, active, and completed count in stat elements

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q61. [BOTH]
// Build a SCORE TRACKER using arrays + DOM.
// - scores = [] array
// - Input + "Add Score" button → push score (as Number), re-render
// - Display each score as a bar — height = score (as a percentage of 100)
//   using style.height = score + "px"
// - Below the bars, show: Total, Average, Highest, Lowest
//   calculated using reduce()
// - "Clear" button → scores = [], clear DOM

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q62. [BOTH]
// Build a PRODUCT FILTER + SORT system.
// - Render all products from productGrid (Q36) as cards
// - Filter buttons: "All", "Under ₹100", "₹100-₹500", "Above ₹500"
// - Sort buttons: "Price ↑", "Price ↓", "Name A→Z"
// - Both filter AND sort should work together
// - Show item count after filtering

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q63. [BOTH]
// Build a STUDENT REPORT CARD generator.
// - Input a student name + marks for 5 subjects
// - On "Generate" button click:
//   a) Push subjects to a marks array
//   b) Use reduce() to find total
//   c) Calculate average
//   d) Use every() to check all subjects are passed (marks >= 35)
//   e) Use find() to get the highest subject
//   f) Render a report card in id="report-card" using innerHTML

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q64. [BOTH]
// Build a QUIZ APP using arrays + DOM.
// - questions array holds objects: { question, options[], answer }
// - Render one question at a time using innerHTML
// - Show option buttons using map() + join()
// - On clicking an option: compare with answer using find()
//   or direct comparison, show correct/incorrect feedback
// - Track score and show final score at the end
// - "Next Question" button increments the index

const quizQuestions = [
    {
        question: "What does push() do?",
        options: ["Adds to start", "Adds to end", "Removes from end", "Removes from start"],
        answer: "Adds to end"
    },
    {
        question: "What does shift() return?",
        options: ["The new length", "The removed last item", "The removed first item", "undefined"],
        answer: "The removed first item"
    },
    {
        question: "Which method does NOT mutate the original array?",
        options: ["push()", "splice()", "sort()", "map()"],
        answer: "map()"
    },
    {
        question: "What does filter() return when nothing matches?",
        options: ["null", "undefined", "[]", "false"],
        answer: "[]"
    },
    {
        question: "What is the initialValue in reduce() used for?",
        options: [
            "Starting value of the accumulator",
            "Maximum value allowed",
            "The final result",
            "The first item"
        ],
        answer: "Starting value of the accumulator"
    },
];

// Write your JS + DOM code here:


// ----------------------------------------------------------

// Q65. [BOTH] — FINAL MEGA CHALLENGE
// Build a MINI STUDENT MANAGEMENT SYSTEM.
// This combines EVERY topic covered in this file.
//
// Features:
// 1. Add student (name + marks + city) → push to array → render table
// 2. Delete student → findIndex() + splice() → remove from DOM
// 3. Search by name → filter() + includes() → re-render
// 4. Sort by: Name A→Z, Marks ↑, Marks ↓, City A→Z
// 5. Filter by city using buttons (All / Delhi / Mumbai / Other)
// 6. Stats panel: total, average (reduce), highest (reduce),
//    pass count (filter), all passed? (every), any failed? (some)
// 7. Export: join all names with ", " → show in a text area
// 8. Import: paste CSV "Name,Marks,City|Name,Marks,City" →
//    split("|") → map() → push each to array → re-render

const managementData = [
    { name: "Aman",  marks: 85, city: "Delhi"   },
    { name: "Priya", marks: 92, city: "Mumbai"  },
    { name: "Ravi",  marks: 43, city: "Delhi"   },
    { name: "Zara",  marks: 78, city: "Mumbai"  },
    { name: "Om",    marks: 38, city: "Jaipur"  },
    { name: "Neha",  marks: 76, city: "Delhi"   },
    { name: "Dev",   marks: 55, city: "Chennai" },
    { name: "Sara",  marks: 91, city: "Mumbai"  },
];

// Write your complete JS + DOM code here:
