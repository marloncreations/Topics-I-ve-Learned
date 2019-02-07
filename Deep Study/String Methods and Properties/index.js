// String Properties

// .length -------------------------------------------------------------------------->>>>>>>>>>>>>>>

const myString = "☃★♲Hello I am a really cute fox in the wild";

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