// TUESDAY, 20 JANUARY 2026, 12:03 - 12:53

// no 1
// Create a function named rectangleArea that takes 2 parameters: length and width, then returns the area.
// Example call: rectangleArea(10, 5); // 50
function rectangleArea(length: number, width: number) {
    return (
        length * width
    );
};
console.log(rectangleArea(10, 5));

// no 2
// Create a function checkEvenOdd that takes 1 parameter (number) and returns the string "Even" or "Odd".
function checkEvenOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(7));

// with ternary operator
// function checkEvenOdd(num: number): string {
//   return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log(checkEvenOdd(1));

// no 3
// Create a function calculateDiscount with 2 parameters: price and discount (in percent).
// The function returns the final price after discount.
function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount / 100);
};
console.log(calculateDiscount(100, 20));

// no 4
// Create a function checkGraduation that takes a parameter score.
// If score ≥ 75 → "Pass" If score < 75 → "Fail"
function checkGraduation(score: number): string {
    if (score >= 75) {
        return "Pass";
    } else {
        return "Fail";
    };
};
console.log(checkGraduation(75));

// no 5
// Create a function fullName that takes firstName and lastName, then returns the full name.
function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
};
console.log(fullName("beny", "gunadi"));

// with template literal
// function fullName(firstName: string, lastName: string): string {
//     return `${firstName} ${lastName}`;
// };
// console.log(fullName("gunadi", "beny"));