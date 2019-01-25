// Generator ---------------------------------------------------------------->>>>>>>>>

// class myObject {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country
//         this.counter = 0;
//     }
// }

// const myArray = [];

// const ana = new myObject("ana", "27", "Colombia");
// const robert = new myObject("robert", "27", "France");
// const pepe = new myObject("pepe", "27", "Germany");
// const luis = new myObject("luis", "27", "Brazil");

// myArray.push(ana);
// myArray.push(robert);
// myArray.push(pepe);
// myArray.push(luis);

// // console.log(myArray);

// function* loop() {
//     for (let i = 0; i < myArray.length; i++) {
//         yield myArray[i];
//     }
// }

// const myGenerator = loop();

// for (let i = 0; i < myArray.length; i++) {
//     if(myArray[i].name === "robert") {
//         myArray[i].counter += 1;
//     }
//     setTimeout(() => {
//         console.log(myGenerator.next().value);
//     }, 200);
// }

// Proxies ---------------------------------------------------------------->>>>>>>>>

// var handler = {
//     get: function(obj, prop) {
//         return prop in obj ?
//             obj[prop] :
//             37;
//     }
// };

// var p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;

// console.log(p.a, p.b);
// console.log('c' in p, p.c);

// EXAMPLE ONE

// const person = { name: "Marlon", age: 100 };
// const personProxy = new Proxy(person, {
//     get(target, name) {
//        return target[name].toUpperCase();
//     },
//     set(target, name, value) {
//         if(typeof value === "string") {
//             target[name] = value.trim();
//         }
//     }
// });

// personProxy.name = "Wesley";
// personProxy.age = 100;

// personProxy.cool = "    Marlon    "

// EXAMPLE TWO

// console.log(personProxy.cool);

// const phoneHandlers = {
//     set(target, name, value) {
//         target[name] = value.match(/[0-9]/g).join('');
//     },
//     get(target, name) {
//         return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
//     }
// }

// const phoneNumbers = new Proxy({}, phoneHandlers);

// EXAMPLE THREE

// const myObj = {
//     name: "Marlon",
//     age: 23
// }

// const safeHandler = {
//     set(target, name, value) {
//         const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());

//         if(!(name in target) && likeKey) {
//             throw new Error(`Oops! look like we already have a(n) ${name} property but with the case of ${likeKey}`)
//         }
//         target[name] = value;
//     }
// }

// const safety = new Proxy({ id: 1 }, safeHandler);

// safety.ID = 10;

// Sets ---------------------------------------------------------------->>>>>>>>>

// const mySet = new Set([34523, 672345, 454]);

// mySet.add(123445);
// // mySet.clear();
// const deletedM = mySet.delete(34523);
// mySet.delete(34523);

// console.log(mySet.has(123445));

// console.log(mySet.entries());

// console.log(mySet.size);

// mySet.forEach((value) => {
//     console.log(value);
// });


// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);

// const students = new Set(['wes','kait','tony']);

// const iterator = students.entries();

// for (let i = 0; i < students.size; i++) {
//     const iteratorStudents = iterator.next();
//     console.log(iteratorStudents);
// }

// students.forEach(() => {
//     console.log(iterator);
//     console.log(iterator.next());
//     console.log(students);
// });

// Sets Examples ---------------------------------------------------------------->>>>>>>>>

// var brunch = new Set();

// brunch.add('wes');
// brunch.add('sara');
// brunch.add('simone');

// const line = brunch.values();

// console.log(line.next().value);
// console.log(line.next().value);

// brunch.add('Marlon');
// brunch.add('Snickers');

// console.log(line.next().value);
// console.log(line.next().value);
// console.log(line.next().value);
// console.log(line.next().value); // ends

// WeakSets ---------------------------------------------------------------->>>>>>>>>

// let dog1 = { name: 'Snickers', age: 3 };
// let dog2 = { name: 'Rolo', age: 23 };

// const weakSauce = new WeakSet([dog1, dog2]);

// console.log(weakSauce);

// dog1 = null;

// console.log(weakSauce);


// Maps ---------------------------------------------------------------->>>>>>>>>

// let keyString = 'a string',
//     keyObj = {},
//     keyFunc = function() {};

// const myMap = new Map([['key', 'value'],[123, Math.sqrt(25)],[{ name: 'Marlon' }, 'String']]);

// const iterator = myMap.keys();

// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, 'value associated with keyObj');
// myMap.set(keyFunc, 'value associated with keyFunc');



// myMap.get(keyString);    // "value associated with 'a string'"
// myMap.get(keyObj);       // "value associated with keyObj"
// console.log(myMap.get(keyFunc));    // "value associated with keyFunc"

// myMap.get('a string');   // "value associated with 'a string'"
//                          // because keyString === 'a string'
// myMap.get({});           // undefined, because keyObj !== {}
// myMap.get(function() {}) // undefined, because keyFunc !== function () {}

// myMap.forEach((value, key) => {
//     console.log(key, value);
// });
// console.log(myMap);

// const dogs = new Map();

// dogs.set('Snickers', 3);
// dogs.set('Sunny', 2);
// dogs.set('Hugo', 10);

// dogs.forEach((val, key) => {
//     console.log(`${key} => ${val}`);
// });

// for( const [key, value] of dogs) {
//     console.log(`${key} => ${value}`);
// }

// console.log(dogs.clear());

// console.log(dogs.has('Snickers'));
// console.log(dogs.get('Snickers'));
// console.log(dogs.delete('Snickers'));
// console.log(dogs);

// Maps ---------------------------------------------------------------->>>>>>>>>

// const clickCounts = new Map();
// const buttons = document.querySelectorAll('button');


// buttons.forEach(button => {
//     clickCounts.set(button, 0);
//     button.addEventListener('click', function() {
//         let val = clickCounts.get(this);
//         clickCounts.set(this, val += 1);
//         console.log(clickCounts);
//     });
// })

// WeakMaps ---------------------------------------------------------------->>>>>>>>>

let dog1 = { name: 'Snickers', age: 3 }
let dog2 = { name: 'Hugo', age: 12 }

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, "This is the first dog on the Map");
weak.set(dog2, "This is the Second dog on the WeakMap");

dog1 = null;
dog2 = null;
