// Basic Literals, Constructor, Prototypes ----------------------------------------------------------------------------

// function Friends(name, age, height, since) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.since = since;
// };

// Friends.prototype.introduce = function() {
//     return `Hello my name is ${this.name},I am ${this.age} years old and I am ${this.height} tall I am friends with Marlon since ${this.since}`;
// };

// Friends.prototype.frienshipYears = function() {
//     const years = new Date().getFullYear() - this.since;
//     return `I am ${this.name} and I have been friends with Marlon for ${years} years`;
// }

// Friends.prototype.revise = function(newYear, color) {
//     this.since = newYear;
//     this.revised = true;
//     this.color = color;
//     console.log(this);
// }

// let Veronika = new Friends("Veronika", "27","1.80cm","1996");
// let Jess = new Friends("Jess", "22","1.60cm","2014");

// console.log(Veronika.frienshipYears());
// console.log(Veronika.revise("2018", "red"));

// console.log(Jess.frienshipYears());
// console.log(Jess.revise("2018", "red"));

// Inheritance ----------------------------------------------------------------------------

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// };

// Book.prototype.getSummary = function() {
//     return `${this.title} was written in ${this.year} by ${this.author}`;
// };

// function Magazine(title, author, year, month) {
        // .call() --> copies the properties of another object into the "this" new object.
//     Book.call(this, title, author, year)
//     this.month = month;
// };

// // inherits the prototype of another objects prototype;
// Magazine.prototype = Object.create(Book.prototype);
// // set the constructor to the function contructor that created the instance
// Magazine.prototype.constructor = Magazine;

// let magazine1 = new Magazine('Robert flies in the hood', 'Robert Blake', '1996', 'January'); 

// console.log(magazine1);

// Object.Create() ----------------------------------------------------------------------------

// const myMethods = {
//     getSummary() {
//         return `${this.title} was written in ${this.year} by ${this.author}`;
//     }
// }
// One Way to create an object with object.create()
// const book = Object.create(myMethods);
// book.title = "Dogs Fly";
// book.year = "1996";
// book.author = "Jonh Franklin";

// Another Way to create an object with object.create()

// const book = Object.create(myMethods, {
//     title: { value: 'Dogs Fly' },
//     author: { value: 'Jonh Franklin' },
//     year: { value: '1996' }
// });

// console.log(book.getSummary());

// ES6 Classes ----------------------------------------------------------------------------

class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author;
    }
    getSummary() {
        return `${this.title} was written in ${this.year} by ${this.author}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
        console.log(this);
    }
    static show() {
        console.log("This is a Book");
    }
}

const book1 = new Book("Dogs Fly", "1996", "Jonh Franklin");

book1.revise("2018");

Book.show();

// ES6 Sub Classes ----------------------------------------------------------------------------

class Magazine extends Book {
    constructor(title, year, author, month) {
        super(title, year, author);
        this.month = month;
    }
}

const magazine1 = new Magazine("Dogs fly", "1996", "Jonh Franklin", "January");

console.log(magazine1.getSummary());

