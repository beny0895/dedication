// THURSDAY, 5 MARCH 2026, 22:05 - 22:35

const name = ["budi", "george", "alexander", "steven"];
const toUppercaseName = name.map(function (variable, index, array) {
  return variable.toLocaleUpperCase();
  console.log(`${index} : ${variable} : ${array}`);
});
console.log(toUppercaseName);
console.log(name);

const number = [1, 3, 4, 5, 16];
const multipleNumber = number.map((number) => {
  return number * 2;
});
console.log(multipleNumber);

//  SATURDAY, 14 MARCH 2026, 23:25.

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
  console.log(i);
}

const arr1 = arr.map(function (value: number) {
  return value * 2;
});

console.log(arr1);
