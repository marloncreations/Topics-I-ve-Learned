// Array Properties

const myArray = [2,3,5,6,2,7,5,8];
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



