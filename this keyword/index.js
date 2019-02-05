// Understanding "this" keyword in different situations

// Where is this funciton invoked?

// var sayName = function(name) {
//     console.log(`Hello ${name}`);
// }

// sayName('Tyler');

// We'll know what "this" is until the function is invoked.






// Implicit Binding 

// Left of the dot rule, that's what the "this" is bind to.

// Example 1

// var me = {
//     name: 'Tyler',
//     age: 25,
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// me.sayName();

// Example 2

// const sayNameMixin = function(obj) {
//     obj.sayName = function() {
//         console.log(this.name);
//     }
// }

// const me = {
//     name: 'Marlon',
//     age: 23
// }

// const you = {
//     name: 'Tyler',
//     age: 25
// }

// sayNameMixin(me);
// sayNameMixin(you);

// me.sayName();
// you.sayName();

// Example 3

// const Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         sayName: function() {
//             console.log(this.name);
//         },
//         mother: {
//             name: 'Ana',
//             age: 56,
//             sayName() {
//                 console.log(this.name);
//             }
//         }
//     }
// }

// const marlon = Person('Marlon', 23);

// marlon.sayName();
// marlon.mother.sayName();







// Explicit Binding 

// For Explicit Binding we use .call .apply and .bind
// .call: 
    // - you can pass arguments with call one by one to feed to a function.
    // - it immediately invokes the function
// .apply:
    // - you can pass an array of arugments to feed to a function.
    // - it immediately invokes the function
// .bind:
    // - you can pass elements one by one like call.
    // - returns a new function instead of invoking a new function to use later.

// Example 1

// const sayName = function(lang1, lang2, lang3) {
//     console.log(`Hello I am ${this.name} and I know ${lang1}, ${lang2}, ${lang3}`);
// }

// const stacey = {
//     name: 'Stacey',
//     age: 23,
// }

// const languages = ['Javascript', 'Ruby', 'Python'];
// call
// sayName.call(stacey, languages[0], languages[1], languages[2]);
// apply
// sayName.apply(stacey, languages[0], languages[1], languages[2]);
// bind
// var brandNewFunction = sayName.bind(stacey, languages[0], languages[1], languages[2]);

// brandNewFunction();







// New Binding

// New binding works for object contstructors to create object instance from the constructor objecT which will make "this like a place holder for the new object class" e.g. this = { this.name }

// const Person1 = function(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
// }

// Person1.prototype.introduce = function() {
//     console.log(`Hello I am ${this.name}, and I'm ${this.age} years old, and btw I am from ${this.country}`)
// }

// const marlon1 = new Person1('Marlon', 23, "Colombia");

// marlon1.introduce();

// const Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         sayName() {
//             console.log(this.name);
//         }
//     }
// }

// const marlon = new Person('Marlon', 23);

// console.log(marlon);
// console.log(marlon1);
// marlon.sayName();





//Window Binding

// var sayAge = function() {
//     console.log(this.age);
// }

// var me = {
//     age: 'Marlon'
// }

// window.age = 25;

// sayAge();





// Other Examples

// function bar() {
//     console.log(Object.prototype.toString.call(this));
//   }
  
//   bar.call(7);    
//   bar.call('foo');

// var toString = Object.prototype.toString;
// console.log(toString.call(new Date));

// console.log(foo);

// var obj = {func: foo};
// console.log(obj.func() === globalObject);
