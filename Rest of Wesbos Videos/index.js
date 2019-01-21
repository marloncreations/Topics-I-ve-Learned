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

const person = { name: 'Wes', age: 100 };
const personProxy = new Proxy(person, )

var handler = {
    get: function(obj, prop) {
        return prop in obj ?
            obj[prop] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);