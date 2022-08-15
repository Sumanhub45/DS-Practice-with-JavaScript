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