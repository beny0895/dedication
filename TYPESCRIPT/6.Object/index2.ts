// SUNDAY, 25 JANUARY 2026, 12:45 - 13:35

// no 1
// Create a student object with properties: name, age, major.
// Then display the sentence:
// "My name is ..., I am ... years old, majoring in ..."
let student = {
    name: "laguna",
    age: 17,
    major: "engineering"
};
console.log(`My name is ${student.name}, I am ${student.age} years old, majoring in ${student.major}`);

// no 2
// Create a bankAccount object with: name, balance, method checkBalance() → displays the current balance.
const bankAccount = {
    name: "nicolas",
    balance: 1000000,
    checkBalance() {
        return `Current balance is ${this.balance}`;
    }
};
bankAccount.checkBalance();
console.log(bankAccount.checkBalance());

// no 3
// Create a product object with: name, price, stock.
// If stock equals 0, change price to "Out of stock".
type IProduct = {
    name: string,
    price: number | string,
    stock: number,
    checkStock(): void,
}
const product: IProduct = {
    name: "victus",
    price: 100000,
    stock: 0,
    checkStock() {
        if (this.stock === 0) {
            this.price = "Out of stock";
        }
    }
};
product.checkStock();
console.log(product.price);

// no 4
// Create a function printData() that takes an object containing: name, age, city.
// Function displays: "Hello, my name is ..., I am ... years old, I live in ..."
type IData = {
    name: string,
    age: number,
    city: string,
}
const data: IData = {
    name: "Antonio",
    age: 22,
    city: "cileungsi",
};
function printData(data: IData) {
    return console.log(`Hello, my name is ${data.name}, I am ${data.age} years old, I live in ${data.city}`);
}
printData(data);

// no 5
// Create a user object with: username, profile (object) containing: email, phoneNumber.
// Display the user's email.
const user = {
    username: "pearl",
    profile: {
        email: "ferry@gmail.com",
        phoneNumber: +628111
    }
};
console.log(user.profile.email);