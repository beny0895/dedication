// SATURDAY, 24 JANUARY 2026, 10:20 - 11:11

// question 1
// Create a user object with properties: name, age, job.
// Then: Display the name value, change the age, add a new property activeStatus.
const user = {
    name: "budi",
    age: 22,
    activeStatus: true,
    job: "businessman"
};
console.log(user);

// question 2
// Create a car object. If fuel exists, method drive() → decreases fuel,
// method refuel() → increases fuel.
const car = {
    brand: "bmw",
    fuel: 5,
    drive() {
        this.fuel -= 1;
    },
    refuel() {
        this.fuel += 1;
    }
};
car.refuel();
console.log(car.fuel);

// question 3
// Create an account object with: username, email, profile (object) -> fullName, address, age.
// Retrieve and display: fullName and address.
const account = {
    username: "buds",
    email: "budi@gmail.com",
    profile: {
        fullName: "budi taniagus",
        address: "cilengusi hijau",
        age: 22
    }
};
console.log(account.profile.fullName);
console.log(account.profile.address);

// question 4
// Create a product object with: name, price, stock.
// Logic: If stock = 0 → display "Out of stock" If available → "Product available".
const product = {
    name: "handphone",
    price: 1000000,
    stock: 0,
    checkStock() {
        if (this.stock === 0) {
            console.log("Out of stock");
        } else {
            console.log("Product available");
        }
    }
};
product.checkStock();
console.log(product.stock);

// question 5
// Create a function printData() that takes an object as a parameter.
// Object contains: name, age, city.
// Function displays the sentence: "My name is ..., I am ... years old, I live in ..."
interface IData {
    name: string,
    age: number,
    city: string
}
const data: IData = {
    name: "budi",
    age: 22,
    city: "cileungsi",
};
function printData(data: IData) {
    return console.log(`My name is ${data.name}, I am ${data.age} years old, I live in ${data.city}`);
}
printData(data);