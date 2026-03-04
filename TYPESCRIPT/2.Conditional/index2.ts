// WEDNESDAY, 7 JANUARY 2026, 14:31 - 16:42

let score: number = 100;
if (score >= 80 && score === 100) {
    const notification = "passed";
    console.log(notification);
} else if (score < 80 && score >= 1) {
    console.log("remedial");
} else if (score === 0) {
    console.log("not passed");
} else {
    console.log("did not take the exam");
}

let value: number = 80;
switch (true) {
    case value >= 80: //1
        console.log("passed");
        break;
    case value < 80: //2
        console.log("not passed");
        break;
    default: //3
        console.log("did not take the exam");
}

let fruit: string = "apple";
switch (fruit) {
    case "apple":
        const price = "price of apple 10,000";
        console.log(price);
        break;
    case "orange":
        console.log("price of orange 8,000");
        break;
    default:
        console.log("did not buy fruit");
}

// Program to check if a number is greater than 100.
let number1: number = 10;
if (number1 >= 100) {
    console.log("number greater than 100");
}
if (number1 < 100) {
    console.log("number less than 100");
};

// Program to check if a string is empty or not.
let sentence: string = "";
if (sentence === "") {
    console.log("string is empty");
}
if (sentence != "") {
    console.log("string is not empty");
}

// Program to check if balance is more than 1,000,000.
let balance: number = 10000;
if (balance >= 1000000) {
    console.log("balance more than 1,000,000");
}

// Program to check if login is successful or failed based on username.
let username: string = "agus";
if (username === "budi") {
    console.log("login successful");
} else {
    console.log("login failed");
};

// Program to check if exam score is passed or not (≥ 75).
let examScore: number = 74;
if (examScore >= 75) {
    console.log("passed");
} else {
    console.log("not passed");
}

// Program to check if temperature is hot (> 30) or normal.
let temperature: number = 40;
if (temperature >= 30) {
    console.log("temperature is hot");
} else {
    console.log("temperature is not hot");
};

// Program to display vehicle type based on code (M, C, B).
let vehicle: string = "avanza";
switch (vehicle) {
    case "avanza":
        console.log("code M");
        break;
    case "ferrari":
        console.log("code C");
        break;
    case "bmw":
        console.log("code B");
}

// Program to display month based on number 1–12.
let number2: number = 10;
switch (number2) {
    case 1:
        console.log("january"); break;
    case 2:
        console.log("february"); break;
    case 3:
        console.log("march"); break;
    case 4:
        console.log("april"); break;
    case 5:
        console.log("may"); break;
    case 6:
        console.log("june"); break;
    case 7:
        console.log("july"); break;
    case 8:
        console.log("august"); break;
    case 9:
        console.log("september"); break;
    case 10:
        console.log("october"); break;
    case 11:
        console.log("november"); break;
    case 12:
        console.log("december"); break;
};

// Program to display payment status (paid, pending, canceled).
let status1: string = "paid";
switch (status1) {
    case "paid":
        console.log("paid");
        break;
    case "pending":
        console.log("pending");
        break;
    case "canceled":
        console.log("canceled");
}