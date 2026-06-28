// Without array — messy
const student1 = "Aman";
const student2 = "Priya";
const student3 = "Ravi";

// With array — clean
const students = ["Aman", "Priya", "Ravi"];

let fruits = [];

let fruit = ["Apple", "Banana", "Mango"];
console.log(fruit[0]);
console.log(fruit[1]);

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]);
console.log(fruits[87]);
console.log(fruits[-1]);
let fruits[1] = "Berry";
fruits[1] = "Berry";
console.log(fruits[1]);
let fruits[4] = "Chilli";
fruits[4] = "Chilli";
console.log(fruits);
fruit[3] = "Watermelon";
fruits[3] = "Watermelon";
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length -1]);
let data = [
  "John",
  25,
  true,
  null,
  undefined
];
undefined
let dat = [
    "Hamilton",
    450,
    false,
    null,
    undefined
];
console.log(dat);
undefined
let da = [
  {
    name: "John",
    age: 25
  },
  {
    name: "Alice",
    age: 30
  }
];
console.log(da);

let d = [
    {
        name: "Bob",
        job: "Jobless",
        class: "Middle",
    },
    {
        name: "Jeff",
        job: "Lawyer",
        class: "High",
    }
];

let objects = [
    {
        name: "John",
        age: 43,
    },
    {
        name: "Bob",
        age: 26,
    }
];
objects[0].name;
// 'John'
objects[0].age;
// 43
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
numbers[0];
// (3) [1, 2, 3]
numbers[0][2];
// 3
let numers = [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9]
    ];
numers[1][3];
// 6
console.log(numers);
// (3) [Array(2), Array(4), Array(3)]0: (2) [1, 2]1: (4) [3, 4, 5, 6]2: (3) [7, 8, 9]length: 3[[Prototype]]: Array(0)

const c = [1, 2, 3];
const d = [...c];

// - Arrays store multiple values in one variable
// - Index always starts at 0
// - Last index = length - 1
// - typeof array = "object" — use Array.isArray() to check
// - Arrays are reference types — use [...arr] to copy safely
 //- Arrays are mutable