// practic of array and array methods in javascript  ***************************

// Array of numbers 1-10
const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Char array of one to ten 
const Arr2 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
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
Arr.sort(function(a, b){return b-a});
console.log(Arr); // Print the array

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

