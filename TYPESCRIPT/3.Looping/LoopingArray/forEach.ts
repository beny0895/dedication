// WEDNESDAY, 4 MARCH 2026, 12:30 - 13:05

let animals = ["fish", "bird", "cat", "bear"];
console.log(animals.length);

animals.forEach((variable, index, array)=> {
    console.log(`${index} : ${variable} : ${array}`)
})

for(let i = 0; i < animals.length; i++) {
    console.log(i);
};

animals.forEach(function(animals, index) {
    console.log(`${index} : ${animals}`);

    console.log(animals);
});

interface Istudent {
    firstname: string,
    lastname: string,
    age: number,
    // [x: string] : string | number
};
const student: Istudent= {
    firstname : "budi",
    lastname: "taniagus",
    age: 22,
};
// for in
for (let x in student) {
    console.log(`${x} : ${student[x as keyof Istudent]}`);
};

// for
const keys = Object.keys(student) as (keyof Istudent)[];
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key} : ${student[key as keyof Istudent]}`);
};
