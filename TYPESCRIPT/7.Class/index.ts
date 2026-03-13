// TUESDAY, 27 JANUARY 2026, 22:35 - 23:43

// no 1
// Create a class named User. Requirements: Has properties: name, age.
// Has method introduce() that returns the string:
// "Hello, my name is {name} and I am {age} years old"
class User {
    name: string;
    age: number;

    constructor(paramName: string, paramAge: number) {
        this.name = paramName;
        this.age = paramAge;
    };

    introduce() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old`;
    };
};

const object = new User("budi", 22);
console.log(object);

// no 2
// Create a class Counter. Requirements: Property: value (initial value from constructor).
// Methods: increment() → adds value +1, decrement() → subtracts value -1,
// showData() → returns the current value.
class Counter {
    value: number;

    constructor(paramValue: number) {
        this.value = paramValue;
    };

    increment() {
        this.value += 1;
    };

    decrement() {
        this.value -= 1;
    };

    showData() {
        return this.value;
    };
};
const counter = new Counter(10);
counter.decrement();
counter.decrement();
counter.decrement();
counter.increment();
counter.increment();
console.log(counter.showData());

// no 3
// Create a class Product. Requirements: Properties: name, price.
// If price < 0, automatically set to 0.
// Method showInfo() returns "Product: {name}, Price: {price}"
class Product {
    name: string;
    price: number;

    constructor(paramName: string, paramPrice: number) {
        this.name = paramName;
        this.price = paramPrice;
        if (this.price < 0) {
            this.price = 0;
        } else {
            this.price = paramPrice;
        };
    };

    showInfo() {
        return `Product: ${this.name}, Price: ${this.price}`;
    };
};
const product = new Product("tv", -100000);
console.log(product.showInfo());

// no 4
// Create a class Student. Requirements: Properties: name, score.
// Method showGrade(): score ≥ 80 → "A", score ≥ 70 → "B", score ≥ 60 → "C", otherwise → "D"
class Student {
    name: string;
    score: number;

    constructor(paramName: string, paramScore: number) {
        this.name = paramName;
        this.score = paramScore;
    };

    showGrade() {
        if (this.score >= 80) {
            return "A";
        } else if (this.score >= 70) {
            return "B";
        } else if (this.score >= 60) {
            return "C";
        } else {
            return "D";
        };
    };
};
const student = new Student("budi", 90);
console.log(student.showGrade());

// no 5
// Create a class BankAccount. Requirements: Properties: owner, balance.
// Methods: deposit(amount) → add to balance.
// withdraw(amount) if balance is sufficient → subtract from balance.
// if not enough → return string "Insufficient balance"
// infoBalance() → return balance
class BankAccount {
    owner: string;
    balance: number;

    constructor(paramOwner: string, paramBalance: number) {
        this.owner = paramOwner;
        this.balance = paramBalance;
    };

    deposit(amount: number) {
        this.balance += amount;
    };

    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return "Withdrawal successful";
        } else {
            return "Insufficient balance";
        };
    };

    infoBalance() {
        return this.balance;
    };
};
const bankAccount = new BankAccount("budi", 10);
bankAccount.deposit(15);
bankAccount.deposit(15);
console.log(bankAccount.infoBalance());
const bankAccount1 = new BankAccount("nicolas", 50);
console.log(bankAccount1.infoBalance());
console.log(bankAccount1.withdraw(60));