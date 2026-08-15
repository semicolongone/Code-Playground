// ============================================================
//  practice-04.js
//  Topics: flat(), sort(), reverse(), join(), split()
// ============================================================
//  Instructions:
//  - Write your answer below each question
//  - Do NOT look at the solutions file unless you are stuck
//  - Run the file in Node.js to check your output
// ============================================================



// ============================================================
//  SECTION 1 — flat() (Q1–Q10)
// ============================================================
//  QUICK REMINDER:
//  array.flat()         → flattens ONE level deep
//  array.flat(depth)    → flattens up to depth levels
//  array.flat(Infinity) → flattens ALL levels
//  → returns a NEW array
//  → original is NEVER changed
// ============================================================

// Q1.
// What will this log? Guess first, then run it.

const nested1 = [1, [2, 3], [4, 5]];
console.log(nested1.flat());
console.log(nested1);

// Your guess:
// flat()    →
// original  →

// ----------------------------------------------------------

// Q2.
// How many levels deep does flat() go by default?
// Prove it by running this code and explaining the output.

const deep = [1, [2, [3, [4]]]];
console.log(deep.flat());
console.log(deep.flat(2));
console.log(deep.flat(3));

// Your guess:
// flat()    →
// flat(2)   →
// flat(3)   →

// ----------------------------------------------------------

// Q3.
// Use flat(Infinity) to completely flatten this array
// no matter how deep it is.

const veryDeep = [1, [2, [3, [4, [5]]]]];

// Your answer:


// ----------------------------------------------------------

// Q4.
// Flatten this array of student mark arrays into one flat array.

const classMarks = [[85, 90], [78, 92], [88, 76], [55, 60]];

// Your answer:


// ----------------------------------------------------------

// Q5.
// What will this log? Guess first.

const mixed = [1, 2, [3, 4], 5, [6, [7, 8]]];
console.log(mixed.flat());

// Your guess:


// ----------------------------------------------------------

// Q6.
// flat() removes "empty slots" from sparse arrays.
// What will this log?

const sparse = [1, , 3, , 5];
console.log(sparse.flat());

// Your guess:


// ----------------------------------------------------------

// Q7.
// You have a list of subject arrays for each student.
// Flatten all subjects into one single array.
// Then find out how many total subjects there are.

const studentSubjects = [
    ["Maths", "Science"],
    ["English", "History", "PE"],
    ["Maths", "Art"],
];

// Your answer:


// ----------------------------------------------------------

// Q8.
// Use flat() followed by a method of your choice
// to get a sorted flat list of all unique numbers.

const numGroups = [[3, 1, 4], [1, 5, 9], [2, 6, 5]];

// Your answer:


// ----------------------------------------------------------

// Q9.
// What is the difference between these three?
// Predict all three outputs.

const arr = [[1, 2], [3, [4, 5]]];
console.log(arr.flat(0));
console.log(arr.flat(1));
console.log(arr.flat(2));

// Your guess:
// flat(0) →
// flat(1) →
// flat(2) →

// ----------------------------------------------------------

// Q10.
// CHALLENGE — use flat() and reduce() together.
// Flatten the nested array, then find the SUM of all numbers.

const groups = [[10, 20], [30, 40], [50, 60]];

// Your answer:




// ============================================================
//  SECTION 2 — sort() (Q11–Q22)
// ============================================================
//  QUICK REMINDER:
//  array.sort()              → sorts as STRINGS (default, often wrong for numbers)
//  array.sort((a, b) => a - b) → ascending numbers
//  array.sort((a, b) => b - a) → descending numbers
//  → MUTATES the original array
//  → use [...arr].sort() to sort safely without changing original
// ============================================================

// Q11.
// What will this log? This is the most common sort trap.
// Guess before running.

const nums = [10, 2, 100, 21, 9];
nums.sort();
console.log(nums);

// Your guess:
// Explanation of why:


// ----------------------------------------------------------

// Q12.
// Sort this array in ASCENDING order (smallest to largest).
// Use the correct compare function.

const scores = [45, 78, 32, 91, 55, 20, 88];

// Your answer:


// ----------------------------------------------------------

// Q13.
// Sort this array in DESCENDING order (largest to smallest).

const prices = [150, 30, 500, 75, 200, 10];

// Your answer:


// ----------------------------------------------------------

// Q14.
// Sort these names in alphabetical order (A → Z).

const names = ["Ravi", "Aman", "Zara", "Priya", "Om"];

// Your answer:


// ----------------------------------------------------------

// Q15.
// Sort names in REVERSE alphabetical order (Z → A).
// Hint: use localeCompare() with the arguments swapped.

const names2 = ["Ravi", "Aman", "Zara", "Priya", "Om"];

// Your answer:


// ----------------------------------------------------------

// Q16.
// What will this log? Understand HOW the compare function works.

const result = [3, 1, 2].sort((a, b) => {
    console.log("comparing", a, "and", b);
    return a - b;
});
console.log(result);

// Your guess — what gets logged during the sort:


// ----------------------------------------------------------

// Q17.
// Sort these student objects by marks — ASCENDING.

const students = [
    { name: "Ravi",  marks: 78 },
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Zara",  marks: 55 },
    { name: "Om",    marks: 67 },
];

// Your answer:


// ----------------------------------------------------------

// Q18.
// Sort the same students by NAME alphabetically (A → Z).
// Use localeCompare() for string comparison.

// Your answer (use students array above):


// ----------------------------------------------------------

// Q19.
// Sort WITHOUT changing the original array.
// Sort a copy of scores (Q12) in descending order.
// Then prove the original is unchanged.

// Your answer:


// ----------------------------------------------------------

// Q20.
// What will this log? Guess first.

const letters = ["b", "d", "a", "c"];
const sorted = [...letters].sort();
console.log(sorted);
console.log(letters);

// Your guess:
// sorted  →
// letters →

// ----------------------------------------------------------

// Q21.
// Sort this array of products by price — cheapest first.
// Then log only the product names in that order.

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Pen",    price: 10    },
    { name: "Book",   price: 200   },
    { name: "Bag",    price: 800   },
    { name: "Ruler",  price: 25    },
];

// Your answer:


// ----------------------------------------------------------

// Q22.
// CHALLENGE — sort by TWO criteria.
// Sort students first by city (A → Z),
// and if city is the same, sort by marks (highest first).

const cityStudents = [
    { name: "Aman",  city: "Delhi",   marks: 85 },
    { name: "Priya", city: "Mumbai",  marks: 92 },
    { name: "Ravi",  city: "Delhi",   marks: 78 },
    { name: "Zara",  city: "Mumbai",  marks: 88 },
    { name: "Om",    city: "Jaipur",  marks: 76 },
];

// Hint: In the compare function, first compare city.
// If cities are equal (localeCompare returns 0),
// then compare marks (b.marks - a.marks for descending).

// Your answer:




// ============================================================
//  SECTION 3 — reverse() (Q23–Q30)
// ============================================================
//  QUICK REMINDER:
//  array.reverse()
//  → reverses the array IN PLACE (mutates original)
//  → use [...arr].reverse() to reverse safely
//  → returns the reversed array (same reference)
// ============================================================

// Q23.
// What will this log? Does reverse() change the original?

const letters2 = ["A", "B", "C", "D", "E"];
const rev = letters2.reverse();
console.log(rev);
console.log(letters2);
console.log(rev === letters2);

// Your guess:
// rev      →
// letters2 →
// rev === letters2 →
// Explanation:


// ----------------------------------------------------------

// Q24.
// Reverse this array WITHOUT changing the original.

const original = [1, 2, 3, 4, 5];

// Your answer:


// ----------------------------------------------------------

// Q25.
// What will this log?

const nums2 = [1, 2, 3, 4, 5];
nums2.reverse();
nums2.reverse();
console.log(nums2);

// Your guess:


// ----------------------------------------------------------

// Q26.
// Use sort() + reverse() to sort in DESCENDING order.
// (This is an alternative to sort((a,b) => b - a))

const values = [30, 10, 50, 20, 40];

// Your answer:


// ----------------------------------------------------------

// Q27.
// Reverse only part of this array.
// Reverse just the last 3 items, keep the first 2 unchanged.
// Hint: use slice(), reverse(), and spread to combine.

const data = [1, 2, 3, 4, 5];
// Expected: [1, 2, 5, 4, 3]

// Your answer:


// ----------------------------------------------------------

// Q28.
// Reverse the words in this sentence.
// "Hello World from JS" → "JS from World Hello"
// Hint: split into words, reverse, join back.

const sentence = "Hello World from JS";

// Your answer:


// ----------------------------------------------------------

// Q29.
// Check if this array is a palindrome.
// A palindrome reads the same forwards and backwards.
// [1, 2, 3, 2, 1] → true
// [1, 2, 3, 4, 5] → false
// Hint: compare the array to its reversed version using join().

const arr1 = [1, 2, 3, 2, 1];
const arr2 = [1, 2, 3, 4, 5];

// Your answer:


// ----------------------------------------------------------

// Q30.
// CHALLENGE — reverse each word individually in a sentence,
// but keep the word order the same.
// "Hello World" → "olleH dlroW"
// Hint: split into words, map() + split + reverse + join each word, join back.

const sentence2 = "Hello World from JS";

// Your answer:




// ============================================================
//  SECTION 4 — join() (Q31–Q38)
// ============================================================
//  QUICK REMINDER:
//  array.join()          → joins with comma (default)
//  array.join(separator) → joins with your chosen separator
//  → returns a STRING
//  → original is NEVER changed
//  → opposite of split()
// ============================================================

// Q31.
// What will each of these log? Guess first.

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join());
console.log(fruits.join(" "));
console.log(fruits.join(", "));
console.log(fruits.join(" | "));
console.log(fruits.join(""));
console.log(fruits.join("-"));

// Your guess:
// join()     →
// join(" ")  →
// join(", ") →
// join(" | ") →
// join("")   →
// join("-")  →

// ----------------------------------------------------------

// Q32.
// Build a sentence from this array of words.
// Result: "My name is Aman"

const words = ["My", "name", "is", "Aman"];

// Your answer:


// ----------------------------------------------------------

// Q33.
// Join these items into a CSV (comma-separated values) row.
// Result: "Aman,25,Delhi,85"

const rowData = ["Aman", 25, "Delhi", 85];

// Your answer:


// ----------------------------------------------------------

// Q34.
// What will this log? Think about what join() does
// when the array contains numbers.

const nums3 = [1, 2, 3, 4, 5];
const joined = nums3.join(" + ");
console.log(joined);
console.log(typeof joined);

// Your guess:
// joined       →
// typeof joined →

// ----------------------------------------------------------

// Q35.
// Use join() to build a file path from these parts.
// Result: "home/user/documents/file.txt"

const pathParts = ["home", "user", "documents", "file.txt"];

// Your answer:


// ----------------------------------------------------------

// Q36.
// Use join() on an array of student names to build a sentence.
// Result: "The students are: Aman, Priya, Ravi and Zara"
// Note: last separator is " and ", rest are ", "
// Hint: slice() and join() together can help.

const studentNames = ["Aman", "Priya", "Ravi", "Zara"];

// Your answer:


// ----------------------------------------------------------

// Q37.
// What will this log?

const mixed2 = ["Hello", null, "World", undefined, "JS"];
console.log(mixed2.join(" "));

// Your guess:


// ----------------------------------------------------------

// Q38.
// CHALLENGE — use map() and join() together.
// Format each student as "Name(marks)" then join with " | ".
// Result: "Aman(85) | Priya(92) | Ravi(78)"

const classData = [
    { name: "Aman",  marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Ravi",  marks: 78 },
];

// Your answer:




// ============================================================
//  SECTION 5 — split() (Q39–Q46)
// ============================================================
//  QUICK REMINDER:
//  string.split(separator) → splits a STRING into an ARRAY
//  string.split("")        → splits into individual characters
//  string.split(" ")       → splits by spaces (into words)
//  → returns a NEW array
//  → opposite of join()
//  → split() is a STRING method, not an array method
// ============================================================

// Q39.
// What will this log? Guess first.

const str = "apple,banana,mango";
console.log(str.split(","));
console.log(str.split(""));
console.log(str.split("a"));

// Your guess:
// split(",") →
// split("")  →
// split("a") →

// ----------------------------------------------------------

// Q40.
// Split this sentence into individual words.

const sentence3 = "JavaScript is fun to learn";

// Your answer:


// ----------------------------------------------------------

// Q41.
// Split this string into individual characters.
// Then log the total character count.

const word = "Playground";

// Your answer:


// ----------------------------------------------------------

// Q42.
// What will this log?

const csv = "Aman,25,Delhi,85";
const parts = csv.split(",");
console.log(parts);
console.log(parts[0]);
console.log(parts[3]);
console.log(typeof parts[3]);

// Your guess:
// parts      →
// parts[0]   →
// parts[3]   →
// typeof parts[3] →

// ----------------------------------------------------------

// Q43.
// split() has an optional LIMIT parameter.
// What will this log?

const tags = "js,html,css,react,node";
console.log(tags.split(",", 3));

// Your guess:


// ----------------------------------------------------------

// Q44.
// Use split() and join() together to REPLACE all spaces
// in this string with hyphens.
// "Hello World from JS" → "Hello-World-from-JS"

const str2 = "Hello World from JS";

// Your answer:


// ----------------------------------------------------------

// Q45.
// Use split() to check if a word is a palindrome.
// A palindrome reads the same forwards and backwards.
// "racecar" → true
// "hello"   → false
// Hint: split → reverse → join → compare to original.

const word1 = "racecar";
const word2 = "hello";

// Your answer:


// ----------------------------------------------------------

// Q46.
// CHALLENGE — parse this data string into an array of objects.
// Each entry is separated by "|"
// Each entry has name and marks separated by ":"
// "Aman:85|Priya:92|Ravi:78"
// Result: [{ name:"Aman", marks:85 }, { name:"Priya", marks:92 }, ...]

const dataString = "Aman:85|Priya:92|Ravi:78|Zara:55";

// Hint: split("|") first, then map() each part,
// then split(":") inside map() to get name and marks.
// Remember: marks should be a NUMBER (use Number() to convert).

// Your answer:




// ============================================================
//  SECTION 6 — Mixed: all five methods (Q47–Q50)
// ============================================================

// Q47.
// You have a nested array of city names.
// a) Flatten it into one array
// b) Sort alphabetically
// c) Join with " → "

const cityGroups = [
    ["Delhi", "Mumbai"],
    ["Jaipur", "Chennai"],
    ["Kolkata", "Pune"],
];

// Your answer:


// ----------------------------------------------------------

// Q48.
// Given this comma-separated string of scores:
// "85,92,43,78,38,76,55,91"
// a) split() into an array
// b) Convert each to a number using map()
// c) sort() in descending order
// d) Take top 3 using slice()
// e) join() back into a string with " > "

const scoreString = "85,92,43,78,38,76,55,91";

// Your answer:


// ----------------------------------------------------------

// Q49.
// What will this ENTIRE block log?
// Trace through every step before running.

const input = "mango,apple,banana,kiwi";

const step1 = input.split(",");
const step2 = step1.map((f) => f.toUpperCase());
const step3 = step2.sort();
const step4 = step3.reverse();
const step5 = step4.join(" | ");

console.log(step1);
console.log(step2);
console.log(step3);
console.log(step4);
console.log(step5);

// Your trace:
// step1 →
// step2 →
// step3 →
// step4 →
// step5 →

// ----------------------------------------------------------

// Q50. — FINAL CHALLENGE
// You are given a paragraph of text.
// Do ALL of the following:

const paragraph = "javascript is a powerful language. javascript runs in the browser. javascript is fun.";

// a) split() the paragraph into individual sentences
//    (split by ". " — period followed by space)
// b) map() each sentence — capitalize the first letter
//    Hint: sentence[0].toUpperCase() + sentence.slice(1)
// c) sort() the sentences in alphabetical order
// d) join() them back with ". " and add a "." at the end
// e) Log the final result

// Your answer:
