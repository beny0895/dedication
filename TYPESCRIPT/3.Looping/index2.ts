// MONDAY, 12, JANUARY 2026, 13:02 - 13:44

// no 1 
// Create a program to display numbers 1 to 10 in the console.
for (let a: number = 1; a <= 10; a++) {
    console.log(a);
};

// no 2
// Create a program to display numbers from 20 down to 2, decreasing by 2 each loop.
for (let b: number = 20; b >= 2; b -= 2) {
    console.log(b);
};

// no 3
// Create a program to display odd numbers from 1 to 15.
for (let c: number = 1; c <= 15; c += 2) {
    console.log(c);
};

// no 4
// Create a program to display numbers 1 to 5 using while.
let d: number = 1;
while (d <= 5) {
    console.log(d);
    d++;
};

// no 5
// Create a program to display numbers 10 down to 0 with a decrement of 1.
let e: number = 10;
while (e >= 0) {
    console.log(e);
    e--;
};

// no 6
// Create a program to display multiples of 3 from 3 to 30.
let f: number = 3;
while (f <= 30) {
    console.log(f);
    f += 3;
};

// no 7
// Create a program to display numbers 1 to 5 using do...while.
let g: number = 1;
do {
    console.log(g); // this one is checked first then executed
    g++;
    console.log(g); // this one is executed first then checked
} while (g <= 5);

// no 8
// Create a program to display numbers 10, 8, 6, 4, 2 using do...while.
let h: number = 10;
do {
    console.log(h);
    h -= 2;
} while (h >= 2);

// no 9
// Create a program to display numbers 5 down to -5 using do...while.
let i: number = 5;
do {
    console.log(i);
    i--;
} while (i >= -5);