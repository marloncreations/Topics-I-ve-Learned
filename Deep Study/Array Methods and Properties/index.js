// Array Properties

const myArray = [2,3,5,6,2,7,5,8];
const myArray1 = ["a", "b", "c", "d", "e", "f", "g"];
const myWordArray = ["random", "hello", "word", "jiraffe", "elephant", "short" ,"cool"]
const myString = "Hello";
const myObject = {
    name: "Hello", id: 1,
    name: "Hello", id: 2,
    name: "Hello", id: 3
};

// Array.length ------------------------------------------------------------------------------>>>>>>

// console.log(myArray.length);

// Array.prototype ------------------------------------------------------------------------------>>>>>>

// Prototype Defines all the methods and properties in the array object array.property is an array itself.

// Array Methods

// Array.isArray() ------------------------------------------------------------------------------>>>>>>

// console.log(Array.isArray(myArray));
// console.log(Array.isArray(myString));
// console.log(Array.isArray(myObject));

// Array.from() ------------------------------------------------------------------------------>>>>>>

// Creates a new Array from and array-like or iterable object

// let lis = document.querySelectorAll("li");
// console.log(lis);

// lis = Array.from(lis, li => {
//         return li.textContent = li.textContent + " Marlon";
//     });
// console.log(lis);

// const fromAString = Array.from(myString);

// Array.of() ------------------------------------------------------------------------------>>>>>>

// console.log(Array.of(7, 6, 7, 5, 4, 3));

// Array.prototype.concat() ----------------------------------------------------------------------->>>>>>

// const letters = Array.from(myString);
// const lis = Array.from(document.querySelectorAll("li"));
// const liTextcontent = [];

// lis.forEach((li)=> {
//     return liTextcontent.push(li.textContent.substring(0, 5) + " Marlon");
// });

// const combinedArrays = letters.concat(myArray, liTextcontent);

// console.log(combinedArrays);

// Array.prototype.copyWithin() ------------------------------------------------------------->>>>>>

// console.log(myArray1);
// console.log(myArray1.copyWithin(0, 3, myArray1.length - 1));
// console.log(myArray1.copyWithin(0, 3, 6));

// console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3)); // Not Understood

// Array.prototype.entries() ------------------------------------------------------------->>>>>>

// const iterator = myArray1.entries();
// const letters = [];
// const indexes = [];
// const booleans = [];

// for (let i = 0; i < myArray1.length; i++) {
//     let iteratorObject = iterator.next();
//     let { value, done } = iteratorObject;
//     let [ index, letter ] = value;
//     console.log(value);

//     letters.push(letter);
//     indexes.push(index);
//     booleans.push(done);
// } 

// // .next gives us the next array iterator object and .value is a property of the array iterator object that contains the array key/value pairs specifically;
// const graphicExample = [[1, "a"],[1, "b"],[1, "c"],[1, "d"],[1, "e"]];

// console.log(iterator);
// console.log(letters, indexes, booleans);

// Array.prototype.keys() & Array.prototype.values() ------------------------------------->>>>>>

// const keys = myArray1.keys();
// const values = myArray1.values();

// const arraySparseKeys = Object.entries(myArray1);
// const arrayDenseKeys = [...myArray1.keys()];
// const arrayPairsKeyValue = [...myArray1.entries()];
// const arrayValues = [...myArray1.values()];


// console.log(arrayDenseKeys, arraySparseKeys);
// console.log(arrayPairsKeyValue);
// console.log(arrayValues);


// for (let i = 0; i < myArray.length; i++) {
//     console.log(values.next().value);
//     setTimeout(function(){
//         console.log(keys.next().value);
//     },200);
// }

// Array.prototype.every() --------------------------------------------------->>>>>>

// const myArray3 = [20,34,54,76,54,34,79,80,45,65,67,87,91,32];

// function biggerThan40(currentValue) {
//     return currentValue >= 40;
// }

// console.log(myArray3.every(biggerThan40));

// Array.prototype.fill() --------------------------------------------------->>>>>>

// console.log(myArray.fill(0, -1));

// var arr = Array(3).fill({})

// console.log(arr);

// arr[0].hello = "hi";

// console.log(arr);

// Array.prototype.filter() ----------------------------------------------------->>>>>>

// function condition(item) {
//     return item.length > 6;
// }

// myWordArrayResult = myWordArray.filter(condition);
// Returns true of false, true if item passed the condition and adds those items to a new array;
// combines with indexof you can search elements in the array
// console.log(myWordArrayResult);

// Array.prototype.find() and Array.prototype.findIndex()------------------------------------->>>>>>

// let foundItem = myArray.find((item) => item > 5); // returns the first item that passes the function
// let foundIndex = myArray.findIndex(item => item > 5); // returns index of the first item that passes the function

// console.log(`the Item is ${foundItem}`, `the Index is ${foundIndex}`);

// Array.prototype.forEach() -------------------------------------------------------------->>>>>>

// const lis = document.querySelectorAll("ul li");

// console.log(lis)

// lis.forEach((item) => {
//     item.innerHTML += " Person";
// });

// class Counter {
//     constructor() {
//         this.sum = 0;
//         this.counter = 0;
//     }
//     add(array) {
//         array.forEach(function(element) {
//             this.sum += element;
//             this.counter += 1; 
//             console.log(`counting ${this.counter}`);
//         },this);
//         console.log(`the sum is ${this.sum}`);
//     }
// }

// const myCounter = new Counter();

// myCounter.add(myArray);

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//   console.log(word);
//   if (word === 'two') {
//     words.shift();
//   }
// });

// Array.prototype.includes() ------------------------------------------------------->>>>>>

// console.log(myWordArray.includes("jiraffe", 4)); // checks if an element is included in the array
// a start index can be provided
// returns true or false

// Array.prototype.indexOf() ----------------------------------------------------------->>>>>>

// console.log(myWordArray.indexOf("jiraffe", 4)); // return the index of the element and -1 if its not present