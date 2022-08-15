// practic of array and array methods in javascript  ***************************

// Array of numbers 1-10
// const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Char array of one to ten 
// const Arr2 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// Add a new number to the end of the array
// Arr.push(11);  

// Add a new number to the beginning of the array
// Arr.unshift(0);  

// splice(index, how many to remove, new item)
// Arr.splice(5, 0, 'a', 'b', 'c');

// splice(index, how many to remove)
// Arr.splice(5, 1); 

// shift() removes the first item in the array
// Arr.shift();

// pop() removes the last item in the array
// Arr.pop();

// reverse() reverses the order of the array
// Arr.reverse();

// sort() sorts the array in ascending order
// Arr.sort();

// sort() sorts the array in descending order
// Arr.sort(function(a, b){return b-a});


// find() finds the first item in the array that matches the condition
// Arr.find(function(item){return item > 5});

// findIndex() finds the index of the first item in the array that matches the condition
// Arr.findIndex(function(item){return item > 5});

// map() creates a new array with the results of the callback function
// Arr.map(function(item){return item * 2});

// filter() creates a new array with all items that match the condition
// Arr.filter(function(item){return item > 5});

// reduce() reduces the array to a single value
// Arr.reduce(function(total, item){return total + item});

// reduceRight() reduces the array to a single value
// Arr.reduceRight(function(total, item){return total + item});

// every() returns true if all items in the array match the condition
// Arr.every(function(item){return item > 5});

// some() returns true if any item in the array matches the condition
// Arr.some(function(item){return item > 5});

// forEach() executes the callback function for each item in the array
// Arr.forEach(function(item){console.log(item)});

// forEach() executes the callback function for each item in the array
// Arr2.forEach(function(item){console.log(item)});

// map() creates a new array with the results of the callback function
// Arr2.map(function(item){return item + "!"});

// filter() creates a new array with all items that match the condition
// Arr2.filter(function(item){return item.length > 3});

// reduce() reduces the array to a single value
// Arr2.reduce(function(total, item){return total + item});

// reduceRight() reduces the array to a single value
// Arr2.reduceRight(function(total, item){return total + item});

// every() returns true if all items in the array match the condition
// Arr2.every(function(item){return item.length > 3});

// some() returns true if any item in the array matches the condition
// Arr2.some(function(item){return item.length > 3});

// find() finds the first item in the array that matches the condition
// Arr2.find(function(item){return item.length > 3});

// findIndex() finds the index of the first item in the array that matches the condition
// Arr2.findIndex(function(item){return item.length > 3});

// for each item in the array, console.log the item and the index of the item in the array
// for ( const i of Arr2 ) {
//     console.log(i);
// }

// console.log(Arr); // Print the array

















// practice of object and object methods in javascript ***************************

// Create an object with the following properties:
// name
// age
// favoriteFood
// Create a function that logs the sentence "My name is NAME and I am AGE years old. My favorite food is FAVORITE_FOOD."

// const obj = {
//     name: "John",
//     age: 30,
//     favoriteFood: "Pizza",
//     sayHello: function() {
//         console.log(`My name is ${this.name} and I am ${this.age} years old. My favorite food is ${this.favoriteFood}`);
//     }
// }

// // Print the sentence "My name is John and I am 30 years old. My favorite food is Pizza."
// obj.sayHello();


// // access object properties with dot notation and bracket notation
// let agee = obj.age;
// console.log(agee);
// let ageee = obj["age"];
// console.log(ageee);

// // change the value of an object property
// obj.age = 31;
// console.log(obj.age);

// // add a new property to an object
// obj.city = "New York";
// console.log(obj.city);

// // delete a property from an object
// delete obj.age;
// console.log(obj.age);

// // Object.keys() returns an array of all the object's property names
// console.log(Object.keys(obj));

// // Object.values() returns an array of all the object's property values
// console.log(Object.values(obj));

// // Object.entries() returns an array of all the object's property names and values
// console.log(Object.entries(obj));

// // Object.assign() copies the enumerable properties of one or more source objects to a target object
// const obj2 = {a: 1, b: 2};
// const obj3 = {c: 3, d: 4};
// const obj4 = Object.assign(obj2, obj3);
// console.log(obj4);

// // Object.is() compares two values to see if they are the same value
// console.log(Object.is(1, 1));
// console.log(Object.is(1, "1"));
// console.log(Object.is([], []));
// console.log(Object.is({}, {}));
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(undefined, undefined));
// console.log(Object.is(null, null));
// console.log(Object.is(true, true));
// console.log(Object.is(false, false));
// console.log(Object.is("a", "a"));
// console.log(Object.is(/a/, /a/));
// console.log(Object.is(new Date(), new Date()));

















// // practice of Set and Set methods in javascript ***************************

// // Create a Set with the following values:
// // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // add a new value to the Set
// set.add(11);

// // remove a value from the Set
// set.delete(11);

// // check if a value exists in the Set
// console.log(set.has(1));

// // loop through the Set and print each value
// for (const item of set) {
//     console.log(item);
// }

// // loop through the Set and print each value
// set.forEach(function(item){
//     console.log(item);
// }

// // convert the Set to an Array
// console.log(Array.from(set));


// console.log(set);























// // practice of Map and Map methods in javascript ***************************

// // Create a Map with the following values:
// // 1, "one", 2, "two", 3, "three", 4, "four", 5, "five"
// const map = new Map([[1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"]]);

// // add a new value to the Map
// map.set(6, "six");

// // remove a value from the Map
// map.delete(6);

// // check if a value exists in the Map
// console.log(map.has(1));

// // loop through the Map and print each value
// for (const item of map) {
//     console.log(item);
// }

// // loop through the Map and print each value
// map.forEach(function(item){
//     console.log(item);
// });

// // convert the Map to an Array
// console.log(Array.from(map));

// // Map of key
// console.log(map.keys());

// // Map of values
// console.log(map.values());

// // Map of entries
// console.log(map.entries());

// // Map of keys and values
// console.log(map.entries());
















// // practice of stack data structure in javascript ***************************

// // Create a stack data structure
// const stack = [];

// // push a value onto the stack
// stack.push(1);
// stack.push(2);
// stack.push(3);

// // pop a value off the stack
// stack.pop();

// // check the length of the stack
// console.log(stack.length);

// // check the top value of the stack
// console.log(stack[stack.length - 1]);

// // loop through the stack and print each value
// for (const item of stack) {
//     console.log(item);
// }

// // create a stack with class methods:
// // push, pop, peek, and isEmpty
// class Stack {
//     constructor() {
//         this.data = [];
//     }

//     push(record) {
//         this.data.push(record);
//     }

//     pop() {
//         return this.data.pop();

//     }

//     peek() {
//         return this.data[this.data.length - 1];
//     }

//     isEmpty() {
//         return this.data.length === 0;
//     }
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.isEmpty());

















// // practice of queue data structure in javascript ***************************

// // Create a queue data structure
// const queue = [];

// // enqueue a value into the queue
// queue.push(1);
// queue.push(2);
// queue.push(3);

// // dequeue a value from the queue
// queue.shift();

// // check the length of the queue
// console.log(queue.length);

// // check the first value of the queue
// console.log(queue[0]);

// // loop through the queue and print each value
// for (const item of queue) {
//     console.log(item);
// }



// // create a queue with class methods:
// // enqueue, dequeue, peek, and isEmpty
// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     enqueue(record) {
//         this.data.unshift(record);
//     }

//     dequeue() {
//         return this.data.pop();
//     }

//     peek() {
//         return this.data[this.data.length - 1];
//     }

//     isEmpty() {
//         return this.data.length === 0;
//     }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());

// // create a circular queue with class methods:
// // enqueue, dequeue, peek, size, print and isEmpty
// class CircularQueue {
//     constructor(size) {
//         this.data = new Array(size);
//         this.size = size;
//         this.head = 0;
//         this.tail = 0;
//     }

//     enqueue(record) {
//         if (this.isFull()) {
//             return "Queue is full";
//         }
//         this.data[this.tail] = record;
//         this.tail = (this.tail + 1) % this.size;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         const record = this.data[this.head];
//         this.head = (this.head + 1) % this.size;
//         return record;
//     }

//     peek() {
//         return this.data[this.head];
//     }

//     size() {
//         return (this.tail + this.size - this.head) % this.size;
//     }


//     print() {
//         let str = "";
//         for (let i = this.head; i < this.tail; i++) {
//             str += this.data[i] + " ";
//         }
//         return str;
//     }

//     isEmpty() {
//         return this.size() === 0;
//     }

//     isFull() {
//         return this.size() === this.size;
//     }
// }

// const queue = new CircularQueue(3);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.size());
// console.log(queue.print());
// console.log(queue.dequeue());











// // practice of LinkedList data structure in javascript ***************************

// // Create a linked list data structure
// const list = {
//     head: null,
//     tail: null,
// };

// // add a new value to the linked list
// const addToList = (list, val) => {
//     const newNode = {
//         value: val,
//         next: null,
//     };

//     if (!list.head) {
//         list.head = newNode;
//         list.tail = newNode;
//     } else {
//         list.tail.next = newNode;
//         list.tail = newNode;
//     }
// }

// // remove a value from the linked list
// const removeFromList = (list, val) => {
//     let current = list.head;
//     let previous = null;

//     while (current) {
//         if (current.value === val) {
//             if (!previous) {
//                 list.head = current.next;
//             } else {
//                 previous.next = current.next;
//             }
//         }
//         previous = current;
//         current = current.next;
//     }
// }

// // check if a value is in the linked list
// const contains = (list, val) => {
//     let current = list.head;
//     while (current) {
//         if (current.value === val) {
//             return true;
//         }
//         current = current.next;
//     }
//     return false;
// }

// // print the values of the linked list
// const printList = (list) => {
//     let current = list.head;
//     let str = "";
//     while (current) {
//         str += `${current.value} `;
//         current = current.next;
//     }
//     return str;
// }

// // create a linked list with class methods:
// // addToList, removeFromList, contains, and printList
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addToList(val) {
//         const newNode = {
//             value: val,
//             next: null,
//         };

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     removeFromList(val) {
//         let current = this.head;
//         let previous = null;

//         while (current) {
//             if (current.value === val) {
//                 if (!previous) {
//                     this.head = current.next;
//                 } else {
//                     previous.next = current.next;
//                 }
//             }
//             previous = current;
//             current = current.next;
//         }
//     }

//     contains(val) {
//         let current = this.head;
//         while (current) {
//             if (current.value === val) {
//                 return true;
//             }
//             current = current.next;
//         }
//         return false;
//     }

//     printList() {
//         let current = this.head;
//         let str = "";
//         while (current) {
//             str += `${current.value} `;
//             current = current.next;
//         }
//         return str;
//     }
// }

// const list = new LinkedList();
// list.addToList(1);
// list.addToList(2);
// list.addToList(3);
// list.addToList(4);
// console.log(list.printList());
// list.removeFromList(2);
// console.log(list.printList());
// console.log(list.contains(3));
// console.log(list.contains(2));












