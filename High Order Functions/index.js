function sayName(callback, name, age) {
    console.log(`Hello my name is ${name}`)
    callback(age);
}

function sayAge(age) {
    console.log(`And I am ${age} years old`);
}


let randomNames = ["Joc" ,"Janvier", "Coco", "Puki", "Rose", "Albert", "Ray", "Naruto", "Inoc", "Neb"];
let names = ["Marlon", "Johanna", "Pepe", "Manguito", "Roseline", "Natalie"];
let ages = ["22", "34", "23", "54", "27"];
// names = names.map((name, i) => `Hello my name is ${name} and I am ${ages[i]} years old`);
// console.log(names);

console.log(names);

names = names.map(() => {
    let number = Math.floor(Math.random() * randomNames.length).toString();
    return randomNames[number];
});

console.log(names);
names.fill(0 ,-4,-2);
console.log(names);

const numbers = [3,6,4,3,7,4,1,6,6];

// function sum(accumulator, currentvalue) {
//     return accumulator + currentvalue;
// }

// let result = numbers.reduce(sum);

// let result = numbers.reduce((accumulator,currentvalue) => {
//     console.log(`accumulator: ${accumulator}`);
//     console.log(`current value: ${currentvalue}`);
//     return (accumulator - (currentvalue/2)) + currentvalue;
// }, 0);

let result = numbers.reduce((accumulator,currentvalue) => {
    console.log(`accumulator: ${accumulator}`);
    console.log(`current value: ${currentvalue}`);
    if (accumulator < currentvalue) {
        return accumulator;
    } else {
        return currentvalue;
    }
});

let smallest = Math.max.apply(Math, numbers);
console.log(result);
console.log(smallest);

// function findOdds(x) {
//     if (!(x % 2)) {
//         return true;
//     } else {
//         return false;
//     }
// }

let odds = numbers.filter((x) => x % 2);

console.log(odds);


let string = "Hello my name is Marlon";
console.log(string.length);

let words = string.split(" ");
words = words.filter (word => word.length);
words = words.reduce((acc, current) => acc + current , "");
console.log(words);
console.log(words.length);

let companies = [
    {name: "My Company", start: "1990", end: "2010"},
    {name: "My Company", start: "1997", end: "2001"},
    {name: "My Company", start: "1995", end: "2015"},
    {name: "My Company", start: "1996", end: "2011"},
    {name: "My Company", start: "1995", end: "2010"},
    {name: "My Company", start: "1980", end: "2008"},
    {name: "My Company", start: "1985", end: "2000"},
    {name: "My Company", start: "1999", end: "2018"},
];

function sortByOldest(a, b) {
    if(a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
}

let youngestCompany = companies.sort(sortByOldest);

let youngestCompany1 = companies.sort((a, b) => a.start - b.start);

console.log(youngestCompany1);