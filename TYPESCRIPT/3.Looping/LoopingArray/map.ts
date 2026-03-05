// THURSDAY, 5 MARCH 2026, 22:05 - 22:35

const name = ["budi", "george", "alexander", "steven"];
const toUppercaseName = name.map(function (variable, index, array) {
    return variable.toLocaleUpperCase();
    // console.log(`${index} : ${variable} : ${array}`)
});
console.log(toUppercaseName);
console.log(name);

const number = [1, 3, 4, 5, 16];
const multipleNumber = number.map((number)=> {
    return number * 2;
});
console.log(multipleNumber);