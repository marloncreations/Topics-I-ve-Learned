// String Properties

// .length -------------------------------------------------------------------------->>>>>>>>>>>>>>>

const myString = "☃★♲Hello I am a really cute fox in Hello the wild";

// console.log(myString.length);



// String Methods

// .fromCharCode() & .fromCodePoint() ------------------------------------------------->>>>>>>>>>>>>>>

// const string = String.fromCharCode(43,54,67,89,43);

// console.log(string);

// console.log(String.fromCharCode(65, 66, 67));
// console.log(String.fromCharCode(0x2014) );
// console.log(String.fromCharCode(0x12014));
 

// console.log(String.fromCodePoint(65, 66, 67));
// console.log(String.fromCodePoint(0x2014) );
// console.log(String.fromCodePoint(0x20001));
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal

// .charAt(), charCodeAt() & codePointAt()----------------------------------------------->>>>>>>>>>>>>>>

// console.log(myString.charAt(6));
// console.log(myString.charCodeAt(0));
// console.log(myString.codePointAt(0));

// .concat -------------------------------------------------------------------------->>>>>>>>>>>>>>>
// concatinates 2 strings and returns a new string.

// const string1 = "I am a cute Panda";
// const string2 = "I am a cute Fox";

// const newString = string1.concat(", ", string2);
// const newString2 = string1.concat(" - ", string2, ", Another String Added").toUpperCase();

// console.log(newString);
// console.log(newString2);
// console.log(string1);
// console.log(string2);

// console.log('%c new Lines', 'background: red');

// var greetList = ['Hello', ' ', 'Venkat', '!'];

// console.log("".concat(...greetList));
// console.log("Hi".concat({}));
// console.log("Hikaru".concat([]));
// console.log("".concat(null));
// console.log("".concat(true));
// console.log("".concat(4, 5));

// .endsWith -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// console.log(myString);

// const endsWithWild = myString.endsWith('wil', myString.length -1);
// console.log(endsWithWild);

// .includes -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// console.log(myString);

// const includesThis = myString.includes("really", 24);
// console.log(includesThis);

// .indexOf -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// console.log(myString);

// const wordToFind = "Hello";

// const index = myString.indexOf(wordToFind);

// const secondOccurrence = myString.indexOf(wordToFind, (index + 1));

// console.log(index);
// console.log(secondOccurrence);

// .lastIndexOf -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// console.log(myString);

// const wordToFind = "Hello";

// const lastindex = myString.lastIndexOf(wordToFind);

// const secondOccurrence = myString.lastIndexOf(wordToFind, lastindex -1);

// console.log(wordToFind);
// console.log(lastindex);
// console.log(secondOccurrence);

// .lastIndexOf -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// const a = 'Hello';
// const b = 'HELLO';

// console.log(a.localeCompare(b));
// console.log(b.localeCompare(a));
// console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));

// .match -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// const form = document.querySelector("[name='form1']");
// const button = document.querySelector("input");
// console.log(button.matches('input'));

// console.log(form);

// function checkItem(e) {
//  console.log(e.target.matches('input'));
//  console.dir(e.target);
// }

// form.addEventListener("click", checkItem);

// const stringCheck = "Hello";

// const found = myString.match(stringCheck);

// console.log(found);

// var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// var regex = /[A-Z]/g;
// var found = paragraph.match(regex);

// console.log(found); // matches strings against a regular expression.

// .normalize -------------------------------------------------------------------------->>>>>>>>>>>>>>>

var first = '\u212B'; 

const normalized = first.normalize();

console.log(normalized);

// .padEnd -------------------------------------------------------------------------->>>>>>>>>>>>>>> 