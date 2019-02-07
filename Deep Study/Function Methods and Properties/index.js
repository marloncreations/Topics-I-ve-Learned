// Function Properties

// .caller ------------------------------------------------------------------------------>>>>>>>>>>>
// function getName(name) {
//     const sayName = `My name is ${name}`;
//     console.log(sayName );
//     console.log(sayName.caller);
// }

// function sayName(name, age) {
//     getName(name);
//     console.log(`I am ${age} years old`);
// }

// sayName("Marlon", 23);

// function myFunc() {
//     if (myFunc.caller == null) {
//         return 'The function was called from the top!';
//     } else {
//         return 'This function\'s caller was ' + myFunc.caller;
//     }
// }

// console.log(myFunc());

// .length ------------------------------------------------------------------------------>>>>>>>>>>>

// function joinTwoNames(name1, name2) {
//     console.log(name1 + name2);
// }

// joinTwoNames("Marlon", "Parra");
// console.log(joinTwoNames.length);

// console.log((function()        {}).length); /* 0 */
// console.log((function(a)       {}).length); /* 1 */
// console.log((function(a, b, c)    {}).length); /* 2 etc. */

// console.log((function(...args) {}).length); 
// // 0, rest parameter is not counted

// console.log((function(a, b = 1, c) {}).length);
// // 1, only parameters before the first one with 
// // a default value is counted






// Function Methods

// .call() ------------------------------------------------------------------------------>>>>>>>>>>>
    // - you can pass arguments with call one by one to feed to a function.
    // - it immediately invokes the function
    // - With call(), an object can use a method belonging to another object

// Example 1

// const person = {
//     sayFullName: function(city, country) {
//         console.log(`Hello My Name is ${this.firstName} ${this.lastName} and I am from ${city}, ${country}`);
//     }
// }

// const marlon = {
//     firstName: "Marlon",
//     lastName: 'Parra'
// }

// person.sayFullName.call(marlon, "Bogota", "Colombia");

// Example 2

// function Product(name, price) { // creates a constructor function receiving 2 variables name and price
//     this.name = name;           // sets variable name
//     this.price = price;         // sets variable price
// }

// Product.prototype.offer = function() {
//       console.log(`This is a ${this.name} and it costs ${this.price}`);
// };
  
// function Food(name, price) { // creates a constructor function receiving 2 variables name and price
//     Product.call(this, name, price); // calls the product.call and passes this (which equals to ) and 2 variables, basically copies the properties from product to the food contsructor
//     this.category = 'food';
// }

// // inherits the prototype of another objects prototype;
// Food.prototype = Object.create(Product.prototype);

// // sets the constructor to the function contructor that created the instance
// Food.prototype.constructor = Food;

// const cheese = new Food('cheese', 5);

// console.log(cheese);

// cheese.offer();

// expected output: "cheese"
  









// .apply() ------------------------------------------------------------------------------>>>>>>>>>>>
    // - you can pass an array of arugments to feed to a function.
    // - it immediately invokes the function
    // - the "this" keyword can be set to anything.

// Example 1

// var numbers = [5, 6, 2, 3, 7];

// var max = Math.max.apply(null, numbers);

// console.log(max);
// // expected output: 7

// var min = Math.min.apply(null, numbers);

// console.log(min);
// // expected output: 2

// max = -Infinity, min = +Infinity;

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// Example 2

// concatinating arrays

// var array = ['a', 'b'];
// var elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2]










// .bind() ------------------------------------------------------------------------------>>>>>>>>>>>
    // - you can pass elements one by one like call.
    // - returns a new function instead of invoking a new function to use later.

// Example 1

// this.x = 9;    // this refers to global "window" object here in the browser
// var module = {
//     x: 81,
//     getX: function() { return this.x; }
// };
    
// module.getX(); // 81

// var retrieveX = module.getX;
// retrieveX();   
// // returns 9 - The function gets invoked at the global scope

// // Create a new function with 'this' bound to module
// // New programmers might confuse the
// // global var x with module's property x
// var boundGetX = retrieveX.bind(module);
// boundGetX(); // 81

// Example 2 

// function list() {
//     return Array.prototype.slice.call(arguments);
// }

// function addArguments(arg1, arg2) {
//     return arg1 + arg2
// }

// var list1 = list(1, 2, 3); // [1, 2, 3]

// var result1 = addArguments(1, 2); // 3

// // Create a function with a preset leading argument
// var leadingThirtysevenList = list.bind(null, 37);

// // Create a function with a preset first argument.
// var addThirtySeven = addArguments.bind(null, 37); 

// var list2 = leadingThirtysevenList(); 
// // [37]

// var list3 = leadingThirtysevenList(1, 2, 3); 
// // [37, 1, 2, 3]

// var result2 = addThirtySeven(5); 
// // 37 + 5 = 42 

// var result3 = addThirtySeven(5, 10);
// // 37 + 5 = 42 , second argument is ignored
      







// .toSource() & .toString() -------------------------------------------------------------->>>>>>>>>>>

// function hello() {
//     const name = "Marlon";
//     console.log(`Hello I am ${name}`);
// }

// console.log(hello.toString());

// console.log(Math.abs.toString());

// console.dir(hello);
// .toSource: is when you call the function on the console without executing it and it returns you the code, toSource() happens internally in javascript not written by code.

// .toString: gives you the function code in a string;