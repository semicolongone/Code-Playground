// ============================================================
//  practice-03.js
//  Topics: map(), filter(), find(), findIndex(),
//          some(), every(), reduce()
// ============================================================
//  Instructions:
//  - Write your answer below each question
//  - Do NOT look at the solutions file unless you are stuck
//  - Run the file in Node.js to check your output
// ============================================================



// ============================================================
//  SECTION 1 — map() (Q1–Q10)
// ============================================================
//  QUICK REMINDER:
//  array.map((item, index) => { return ... })
//  → creates a NEW array by transforming every item
//  → same length as original — one output per input
//  → original is NEVER changed
//  → whatever you RETURN becomes the new item
// ============================================================

// Q1.
// What will this log? Guess first, then run it.

const nums = [1, 2, 3, 4, 5];
const result = nums.map((n) => n * 3);
console.log(result);
console.log(nums);

// Your guess:
// result → ['3', '6', '9', '12', '15'];
// nums   → ['1', '2', '3', '4', '5'];

// ----------------------------------------------------------

// Q2.
// Use map() to convert all names to UPPERCASE.

const names = ["aman", "priya", "ravi", "zara"];

// Your answer:

const upperNames = names.map((name) => {
    return name.toUpperCase();
});

// ----------------------------------------------------------

// Q3.
// Use map() to add "₹" in front of every price.
// Result should be: ["₹100", "₹250", "₹80", "₹500"]

const prices = [100, 250, 80, 500];

// Your answer:

const truePrice = prices.map((price) => {
    return "₹" + price;
});

// ----------------------------------------------------------

// Q4.
// What will this log? Spot the bug and explain it.

const doubled = [1, 2, 3].map((n) => {
    n * 2;
});
console.log(doubled);

// Your guess: undefined
// Your explanation of the bug: return statement is never used

// ----------------------------------------------------------

// Q5.
// Use map() to extract just the name from each student object.
// Result should be: ["Aman", "Priya", "Ravi"]

const students = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 78 },
];

// Your answer: 

let studs = students.map((student) => {
    return student.name;
});

// ----------------------------------------------------------

// Q6.
// Use map() to add a "grade" property to each student.
// Grade rules: marks >= 90 → "A", marks >= 75 → "B", else → "C"
// Return a NEW array of objects with name and grade only.

const classStudents = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 70 },
    { name: "Zara",  marks: 55 },
];

// Your answer:

const gradeClass = classStudents.map((student) => {
    let grade;
    if (student.marks >= 90) {
        grade = "A";
    } else if (student.marks >= 75) {
        grade = "B";
    } else {
        grade = "C";
    }
    return {name: student.name, grade: grade};
});

// ----------------------------------------------------------

// Q7.
// Use map() with the INDEX to create a numbered list.
// Result: ["1. Aman", "2. Priya", "3. Ravi", "4. Zara"]

// Your answer (use classStudents array above):

const numberedList = classStudents.map((student, index) => {
    return (index + 1) + ". " + student.name;
});

// ----------------------------------------------------------

// Q8.
// Use map() to convert Celsius temperatures to Fahrenheit.
// Formula: (C × 9/5) + 32

const celsius = [0, 20, 37, 100];

// Your answer:

const farenheit = celsius.map((temp) => {
    return (temp * 9/5) + 32;
});

// ----------------------------------------------------------

// Q9.
// What will this log? Trace it carefully.

const items = ["apple", "banana", "mango"];
const result2 = items.map((item, index) => {
    return index + ": " + item.toUpperCase();
});
console.log(result2);

// Your trace:

// Iteration 1: index=0, item="apple" → "0: APPLE"
// Iteration 2: index=1, item="banana" → "1: BANANA"
// Iteration 3: index=2, item="mango" → "2: MANGO"

// ----------------------------------------------------------

// Q10.
// CHALLENGE — map() a cart array.
// Each item has a name, price, and qty.
// Use map() to return a new array where each item has:
//   name, and total (price × qty)

const cart = [
    { name: "Pen",   price: 10,  qty: 5  },
    { name: "Book",  price: 150, qty: 2  },
    { name: "Bag",   price: 500, qty: 1  },
    { name: "Ruler", price: 20,  qty: 3  },
];

// Your answer:

const cartTotal = cart.map((item) => {
    let total = item.price * item.qty
    return {name: item.name, total: total};
});


// ============================================================
//  SECTION 2 — filter() (Q11–Q20)
// ============================================================
//  QUICK REMINDER:
//  array.filter((item) => condition)
//  → returns a NEW array with only items that pass the test
//  → return true  → item is KEPT
//  → return false → item is EXCLUDED
//  → original is NEVER changed
//  → result can be shorter — never longer
// ============================================================

// Q11.
// Filter only numbers greater than 50.

const scores = [45, 78, 32, 91, 55, 20, 88];

// Your answer:

const scoresFilter = scores.filter((score) => score > 50);
console.log(scoresFilter);

// ----------------------------------------------------------

// Q12.
// Filter only EVEN numbers from this array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your answer:

const evenFilter = numbers.filter((number) => number % 2 === 0);
console.log(evenFilter);

// ----------------------------------------------------------

// Q13.
// What will this log? Guess first.

const vals = [0, 1, 2, "", "hello", false, true, null];
const truthy = vals.filter((v) => v);
console.log(truthy);

// Your guess:

// [1, 2, "hello", true];

// ----------------------------------------------------------

// Q14.
// Filter students who scored 80 or above.
// Then log just their names.

const examStudents = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 70 },
    { name: "Zara",  marks: 55 },
    { name: "Om",    marks: 88 },
];

// Your answer:

const passers = examStudents.filter((student) => student.marks >= 80);
const names = passers.map((passer) => passer.name);
console.log(names);

// ----------------------------------------------------------

// Q15.
// Filter out all items that are NOT strings.
// Result should contain only the string values.

const mixed = [1, "hello", true, "world", null, 42, "js"];

// Your answer:

const stringedValues = mixed.filter((value) => typeof(value) === "String");
console.log(stringedValues);

// ----------------------------------------------------------

// Q16.
// Use filter() to remove DUPLICATES from this array.
// Hint: keep an item only if its indexOf equals its current index.

const withDuplicates = [1, 2, 2, 3, 4, 4, 4, 5, 1];

// Your answer:

const withoutDuplicates = withDuplicates.filter((item, index) => {
    return withDuplicates.indexOf(item) === index;
});
console.log(withoutDuplicates);

// ----------------------------------------------------------

// Q17.
// Filter all products that are in stock (stock > 0)
// AND cost less than 500.

const products = [
    { name: "Pen",    price: 20,   stock: 100 },
    { name: "Laptop", price: 50000, stock: 5  },
    { name: "Book",   price: 200,  stock: 0   },
    { name: "Ruler",  price: 30,   stock: 50  },
    { name: "Bag",    price: 450,  stock: 0   },
    { name: "Eraser", price: 10,   stock: 200 },
];

// Your answer:

const cheapStocked = products.filter((product) => {
    return product.stock > 0 && product.price < 500;
});
const productIdentifier = cheapStocked.map((p) => p.name);
console.log(productIdentifier);

// ----------------------------------------------------------

// Q18.
// What will this log? Trace it.

const nums2 = [1, 2, 3, 4, 5];
const filtered = nums2.filter((n) => n > 10);
console.log(filtered);
console.log(filtered.length);

// Your trace:
// filtered        → []
// filtered.length → undefined

// ----------------------------------------------------------

// Q19.
// Chain filter() and map() together.
// From examStudents (Q14):
// Step 1 — filter students who passed (marks >= 50)
// Step 2 — map to get strings like "Aman: 85"

// Your answer:

const passedResult = examStudents.filter((s) => {
    return s.marks >= 50;
}).map((s) => s.name + ": " + s.marks);

// ----------------------------------------------------------

// Q20.
// CHALLENGE — filter a search.
// Return all students whose name CONTAINS the letter "a"
// (case-insensitive — match both "a" and "A").
// Hint: use .toLowerCase() and .includes() on the name string.

const searchStudents = [
    { name: "Aman"  },
    { name: "Priya" },
    { name: "Ravi"  },
    { name: "Zara"  },
    { name: "Om"    },
    { name: "Neha"  },
];

// Your answer:

const aChecker = searchStudents.filter((s) => {
    s.name.toLowerCase().includes("a");
});
console.log(aChecker);

// ============================================================
//  SECTION 3 — find() and findIndex() (Q21–Q30)
// ============================================================
//  QUICK REMINDER:
//  find()      → returns the FIRST item that passes (or undefined)
//  findIndex() → returns the INDEX of first match (or -1)
//  Both stop as soon as they find the first match
//  Neither changes the original array
// ============================================================

// Q21.
// Find the first number greater than 50.

const numList = [20, 35, 55, 80, 15];

// Your answer:

const greaterFifty = numList.find((num) => num > 50);
console.log(greaterFifty);

// ----------------------------------------------------------

// Q22.
// Find the student whose id is 3.

const roster = [
    { id: 1, name: "Aman"  },
    { id: 2, name: "Priya" },
    { id: 3, name: "Ravi"  },
    { id: 4, name: "Zara"  },
];

// Your answer:

const studentThree = roster.find((student) => student.id === 3);
console.log(studentThree);

// ----------------------------------------------------------

// Q23.
// What will this log? Explain why.

const fruits = ["Apple", "Banana", "Mango", "Banana"];
console.log(fruits.find((f) => f === "Banana"));
console.log(fruits.filter((f) => f === "Banana"));

// Your guess:
// find   → "Banana"
// filter → ["Banana", "Banana"]
// Difference: find returns the first match while filter returns all the matches as a new array


// ----------------------------------------------------------

// Q24.
// What does find() return when no item matches?
// Test it and explain.

const scores2 = [10, 20, 30, 40];
console.log(scores2.find((n) => n > 100));

// Your guess and explanation:

// undefined
// there are no matches found

// ----------------------------------------------------------

// Q25.
// Use findIndex() to get the position of the first
// item with marks above 90.

const marksList = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 78 },
    { name: "Zara",  marks: 95 },
];

// Your answer:

const aLocator = marksList.findIndex((student, index) => student.marks > 90);
console.log(aLocator);

// ----------------------------------------------------------

// Q26.
// Use findIndex() to find "Ravi", then UPDATE his marks to 90.

const updateList = [
    { name: "Aman",  marks: 85 },
    { name: "Ravi",  marks: 60 },
    { name: "Priya", marks: 92 },
];

// Your answer:

const raviValue = updateList.findIndex((student) => student.name === "Ravi");
if (raviValue !== -1) {
    raviValue[raviValue].marks = 90;
};
console.log(raviValue);

// ----------------------------------------------------------

// Q27.
// What will this log?

const letters = ["A", "B", "C", "D", "E"];
console.log(letters.findIndex((l) => l === "C"));
console.log(letters.findIndex((l) => l === "Z"));

// Your guess:
// findIndex("C") → 2
// findIndex("Z") → -1

// ----------------------------------------------------------

// Q28.
// Use findIndex() to find a student by name,
// then use splice() to remove them from the array.
// Remove "Om" from this list.

const classList2 = ["Aman", "Priya", "Om", "Zara", "Dev"];

// Your answer:

const removal = classList2.findIndex((student) => student === "Om");
if (removal !== -1) {
    classList2.splice(removal, 1);
};

// ----------------------------------------------------------

// Q29.
// find() vs filter() — when to use which?
// From the array below, do BOTH:
// a) find()   → the first product with stock < 10
// b) filter() → ALL products with stock < 10

const inventory = [
    { name: "Pen",    stock: 5   },
    { name: "Book",   stock: 100 },
    { name: "Ruler",  stock: 3   },
    { name: "Eraser", stock: 50  },
    { name: "Bag",    stock: 8   },
];

// Your answer:

const a = inventory.find((product) => product.stock < 10);
console.log(a);
const b = inventor.filter((product) => product.stock < 10);
console.log(b);

// ----------------------------------------------------------

// Q30.
// CHALLENGE — use find() to safely access a nested value.
// Find the order with id 102, then log its total.
// If not found, log "Order not found".

const orders = [
    { id: 101, item: "Book",  total: 200 },
    { id: 102, item: "Bag",   total: 850 },
    { id: 103, item: "Pen",   total: 50  },
];

// Your answer:

const shopped = orders.find((p) => p.id === 102);
if (shopped !== undefined) {
    console.log("total", shopped.total) 
} else {
    console.log("Order not found");
};


// ============================================================
//  SECTION 4 — some() and every() (Q31–Q40)
// ============================================================
//  QUICK REMINDER:
//  every() → true only if ALL items pass the test
//  some()  → true if AT LEAST ONE item passes
//  Both return true or false
//  Both stop early once the answer is known
//  Neither changes the original array
// ============================================================

// Q31.
// Check if EVERY number in this array is positive.

const nums3 = [3, 7, 12, 5, 9];

// Your answer:

const positiveChecker = nums3.every((n) => n > 0);
console.log(positiveChecker);

// ----------------------------------------------------------

// Q32.
// Check if SOME number in this array is negative.

const temps = [-5, 10, 23, -2, 15];

// Your answer:

const negativeChecker = temps.some((t) => t < 0);
console.log(negativeChecker);

// ----------------------------------------------------------

// Q33.
// What will these log? Guess before running.

const marks = [75, 82, 90, 68, 88];

console.log(marks.every((m) => m >= 50));
console.log(marks.every((m) => m >= 80));
console.log(marks.some((m) => m >= 90));
console.log(marks.some((m) => m >= 95));

// Your guess:
// every >= 50 → true
// every >= 80 → false
// some  >= 90 → true
// some  >= 95 → false

// ----------------------------------------------------------

// Q34.
// Use every() to check if ALL students have submitted their homework.

const homework = [
    { name: "Aman",  submitted: true  },
    { name: "Priya", submitted: true  },
    { name: "Ravi",  submitted: false },
    { name: "Zara",  submitted: true  },
];

// Your answer:

const submitted = homework.every((h) => h.submitted === true);
console.log(submitted);

// ----------------------------------------------------------

// Q35.
// Use some() to check if ANY product is out of stock (stock === 0).

const stock = [
    { name: "Pen",   stock: 50 },
    { name: "Book",  stock: 0  },
    { name: "Ruler", stock: 30 },
];

// Your answer:

const supply = stock.some((sup) => sup.stock === 0);
console.log(supply);

// ----------------------------------------------------------

// Q36.
// What do some() and every() return for an EMPTY array?
// Predict first, then test it.

const empty = [];
console.log(empty.every((n) => n > 0));
console.log(empty.some((n) => n > 0));

// Your prediction:
// every on [] → true
// some  on [] → false
// Explanation:

// every is true because technically no items failed the test

// ----------------------------------------------------------

// Q37.
// Use every() to validate a form.
// All fields must be non-empty strings (length > 0).

const formFields = {
    name:  "Aman",
    email: "aman@gmail.com",
    phone: "",
    city:  "Delhi",
};

// Hint: use Object.values() to get the values as an array,
// then use every() on that array.

// Your answer:

const validation = Object.values(formFields);
const valid = validation.every((val) => val.length > 0);
console.log(valid);
if (!valid) {
    console.log("Please fill in all fields");
};

// ----------------------------------------------------------

// Q38.
// Use some() to check if a username already exists.
// If it exists, log "Username taken", else log "Username available".

const existingUsers = ["alice", "bob", "charlie", "diana"];
const newUser = "bob";

// Your answer:

const userChecker = existingUsers.some((user) => user === newUser);
if (userChecker === true) {
    console.log("Username taken");
} else {
    console.log("Username available");
};

// ----------------------------------------------------------

// Q39.
// Combine every() and some() in one scenario.
// Given the students array:
// a) Did EVERY student attempt the exam? (attempted: true)
// b) Did SOME student score above 90?

const examResults = [
    { name: "Aman",  marks: 85, attempted: true  },
    { name: "Priya", marks: 92, attempted: true  },
    { name: "Ravi",  marks: 0,  attempted: false },
    { name: "Zara",  marks: 78, attempted: true  },
];

// Your answer:

const allAttempted = examResults.every((student) => student.attempted === true);
console.log(allAttempted);
const gradeA = examResults.some((student) => student.marks > 90);
console.log(gradeA);

// ----------------------------------------------------------

// Q40.
// CHALLENGE — use every() and some() to check a password.
// Password rules:
// a) Use every() — length must be >= 8 characters
//    (check each character... actually check the string length)
// b) Use some()  — must contain at least one number
// Hint: split the password into characters first with .split("")

const password = "hello123";

// Your answer:

const chars = password.split("");
console.log(chars);
const lengthVerifier = password.length >= 8;
console.log(lengthVerifier);
const numberChecker = chars.some((c) => c >= 0 && c <= 9);

// ============================================================
//  SECTION 5 — reduce() (Q41–Q50)
// ============================================================
//  QUICK REMINDER:
//  array.reduce((accumulator, currentItem) => { ... }, initialValue)
//  → boils the entire array down to ONE single value
//  → accumulator carries the running result
//  → always provide an initialValue (prevents bugs)
//  → always RETURN the accumulator inside the callback
//  → original is NEVER changed
// ============================================================

// Q41.
// Use reduce() to find the SUM of all numbers.

const numArr = [10, 20, 30, 40, 50];

// Your answer:

const arrSum = numArr.reduce((sum, n) => n + n, 0);
console.log(arrSum);

// ----------------------------------------------------------

// Q42.
// What will this log? Trace through each step.

const vals2 = [1, 2, 3, 4];
const total = vals2.reduce((acc, n) => acc + n, 0);
console.log(total);

// Your trace (fill in each step):
// Start: acc = 0
// n = 1 → acc = 0  + 1 = 1
// n = 2 → acc = 1 + 2 = 3
// n = 3 → acc = 3 + 3 = 6
// n = 4 → acc = 6 + 4 = 10
// Final → 10

// ----------------------------------------------------------

// Q43.
// Use reduce() to find the PRODUCT (multiply all numbers together).

const factors = [1, 2, 3, 4, 5];

// Your answer:

const multiplied = factors.reduce((mul, f) => mul * f, 1);
console.log(multiplied);

// ----------------------------------------------------------

// Q44.
// What happens when you forget to return the accumulator?
// Predict what this logs, then explain the bug.

const broken = [1, 2, 3, 4].reduce((acc, n) => {
    acc + n; // no return!
}, 0);
console.log(broken);

// Your guess: undefined
// Explanation: since there is no return function, then the value is just listed there

// ----------------------------------------------------------

// Q45.
// Use reduce() to calculate the TOTAL price of the cart.
// Each item has a price and qty.

const cartItems = [
    { name: "Pen",   price: 10,  qty: 4 },
    { name: "Book",  price: 200, qty: 2 },
    { name: "Ruler", price: 25,  qty: 3 },
];

// Your answer:

const cartTotal = cartItems.reduce((total, i) => total + (i.price * i.qty, 1), 0);
console.log(cartTotal);

// ----------------------------------------------------------

// Q46.
// Use reduce() to find the MAXIMUM number.
// Do NOT use Math.max() — use reduce() only.

const tempReadings = [32, 67, 45, 89, 23, 78, 55];

// Your answer:

const maxTemp = tempReadings.reduce((max, temp) => temp > max ? temp: max, tempReadings[0]);
console.log(maxTemp);

// ----------------------------------------------------------

// Q47.
// Use reduce() to COUNT how many students passed (marks >= 50).

const resultStudents = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 43 },
    { name: "Zara",  marks: 55 },
    { name: "Om",    marks: 38 },
];

// Your answer:

const passed = resultStudents.reduce((count, student) => {
    if (student.marks > 50) {
        return count + 1;
    } return count;
}, 0);
console.log(passed);

// ----------------------------------------------------------

// Q48.
// Use reduce() to COUNT how many times each fruit appears.
// Start with an empty object {} as the initialValue.
// Result should be: { Apple: 2, Banana: 3, Mango: 1 }

const fruitBasket = ["Apple", "Banana", "Apple", "Mango", "Banana", "Banana"];

// Your answer:

const fruitCount = fruitBasket.reduce((count, fruit) => {
    if (count[fruit] === undefined) {
        count[fruit] = 1;
    } else {
        count[fruit] = count[fruit] + 1;
    }
}, {});

// ----------------------------------------------------------

// Q49.
// Use reduce() to FLATTEN this nested array into one flat array.
// Result: [1, 2, 3, 4, 5, 6]

const nested = [[1, 2], [3, 4], [5, 6]];

// Your answer:

const flat = nested.reduce((acc, arr) => {
    return acc.concat(arr)
}, []);

// ----------------------------------------------------------

// Q50. — FINAL CHALLENGE
// Use ALL seven methods in this one challenge.
// You have a list of students with name, marks, and city.

const allData = [
    { name: "Aman",  marks: 85, city: "Delhi"   },
    { name: "Priya", marks: 92, city: "Mumbai"  },
    { name: "Ravi",  marks: 43, city: "Delhi"   },
    { name: "Zara",  marks: 78, city: "Mumbai"  },
    { name: "Om",    marks: 38, city: "Delhi"   },
    { name: "Neha",  marks: 76, city: "Jaipur"  },
    { name: "Dev",   marks: 55, city: "Delhi"   },
    { name: "Sara",  marks: 91, city: "Mumbai"  },
];

// Do ALL of the following:

// a) filter() — keep only Delhi students
// Your answer:

const delhiStudents = allData.filter((student) => student.city === "Delhi");

// b) map() — from those Delhi students, extract just names
// Your answer:

const delhiNames = delhiStudents.map((student) => student.name);

// c) find() — find the first student (from allData) with marks > 90
// Your answer:

const firstA = allData.find((student) => student.marks > 90);

// d) findIndex() — find the index of "Neha" in allData
// Your answer:

const nehaIndex = allData.findIndex((student) => student.name === "Neha");

// e) some() — does ANY student in allData have marks below 40?
// Your answer:

const belowForty = allData.some((student) => student.marks < 40);

// f) every() — did EVERY student in allData score above 30?
// Your answer:

const aboveThirty = allData.every((student) => student.marks > 30);

// g) reduce() — calculate the AVERAGE marks of ALL students in allData
// Your answer:

const totalMarks = allData.reduce((sum, student) => sum + student.marks, 0);
const average = (totalMarks / allData.length).toFixed(2);