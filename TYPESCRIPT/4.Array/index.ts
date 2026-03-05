// SUNDAY, 18 JANUARY 2026, 10:45 - 11:35

// no 1
// Create an array containing 5 fruit names. Display the array and the item at index 2 in the console.
const fruits = ["mango", "apple", "banana", "orange", "grape"];
console.log(fruits);
console.log(fruits[2]);

// no 2
// Create an array containing 3 numbers. Add 1 number at the end and 1 number at the beginning of the array [10, 20, 30] so it becomes [5, 10, 20, 30, 40].
const numbers = [10, 20, 30];
numbers.push(40);
numbers.unshift(5);
console.log(numbers);

// no 3
// Create an array containing 5 city names. Remove 1 item from the end and 1 item from the beginning. Display the array after removal.
const cities = ["jakarta", "medan", "surabaya", "bekasi", "bogor"];
cities.pop();
cities.shift();
console.log(cities);

// no 4
// Create an array: ["red", "yellow", "green"]. Change "yellow" to "blue". Display the final result.
const trafficLight = ["red", "yellow", "green"];
trafficLight[1] = "blue";
console.log(trafficLight);

// no 5
// Create an array containing several numbers. Display the total number of items in the array and the last item in the array.
let array = [15, 23, 37, 40, 55, 60, 79];
console.log(array.length);
console.log(array[array.length - 1]);
console.log(array[2]);