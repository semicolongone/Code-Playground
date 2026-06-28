let replies = ["Ok", "Great", "Cool"];
let sift = replies.shift();
console.log(replies);

console.log(sift);

replies.shift();
console.log(replies);

let numb = [1, 2, 3, 4, 5];
numb.shift();
console.log(numb);

let tasks = [{ id: 1, task: "Clean"}, { id: 2, task: "Cook"}, { id: 3, task: "Shop"}];
tasks.shift();
console.log(tasks);

let unsift = [2, 3, 4, 5];
unsift.unshift(1);
console.log(unsift);

unsift.unshift(0, -1, -2, -3, -4, -5);
console.log(unsift);

let list = [{ id: 1, item: "Eggs"}, { id: 2, item: "Milk"}, { id: 3, item: "Flour"}];
list.unshift({ id: 0, item: "Chocolate"});
console.log(list);

list.unshift([]);
console.log(list);

list[0] = [{id: 11930, item: "Muffin"}];
console.log(list);