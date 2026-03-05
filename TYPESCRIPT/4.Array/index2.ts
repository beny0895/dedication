// MONDAY, 19 JANUARY 2026, 12:49 - 13:39

// no 1
// ["apple", "orange", "mango", "banana"] Take and store the first and last elements into separate variables.
let fruits = ["apple", "orange", "mango", "banana"];
let fruits1 = [fruits[0], fruits[fruits.length - 1]];
console.log(fruits1);

// just for learning, don’t mind this part
let fruits2 = {
    firstFruit: fruits[0],
    "secondFruit": fruits[fruits.length - 1]
};
console.log(fruits2);
console.log(fruits2.firstFruit);
console.log(fruits2["secondFruit"]);

// no 2
// [70, 80, 90] Change the value 80 to 85 without creating a new array.
let numbers = [70, 80, 90];
numbers[1] = 85;
console.log(numbers);

// no 3
// ["Monday", "Tuesday", "Wednesday"] Add "Thursday" at the end of the array, then remove the last element afterward.
let days = ["Monday", "Tuesday", "Wednesday"];
days.push("Thursday");
days.pop();
console.log(days);

// no 4
// [1, 2], [3, 4] Merge both into a new array.
let number1 = [1, 2];
let number2 = [3, 4];
console.log(number1.concat(number2));
// with a new variable
let number3 = number1.concat(number2);
console.log(number3);

// no 5
// ["red", "yellow", "green", "blue"] Take only ["yellow", "green"] and store them in a new variable.
let lights = ["red", "yellow", "green", "blue"];
let lights2 = [lights[1], lights[lights.length - 2]];
console.log(lights2);
// using method only
console.log(lights.slice(1, 3));
// slice(start, end)