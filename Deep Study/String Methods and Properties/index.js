// String Properties

// .length -------------------------------------------------------------------------->>>>>>>>>>>>>>>

// const myString = "☃★♲Hello I am a really cute fox in Hello the wild";

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

// var first = '\u212B'; 

// const normalized = first.normalize();

// console.log(normalized);

// .padEnd .padStart ------------------------------------------------------------------>>>>>>>>>>>>>>> 

// const myString1 = "SevenSeven";

// const first4Digits = myString1.slice(0, 4);

// const result = first4Digits.padEnd(myString1.length, "*");

// console.log(result);

// const last4Digits = myString1.slice(-4);

// const result2 = last4Digits.padStart(myString1.length, "*");

// console.log(result2);

// .repeat ------------------------------------------------------------------>>>>>>>>>>>>>>> 

// const repeatString = "love ";

// console.log("I " + repeatString.repeat(10) + "you");

// .replace ------------------------------------------------------------------>>>>>>>>>>>>>>>

// const myString2 = "They love, I love, You love"

// const wordToReplace = /love/gi;

// console.log(myString2.replace(wordToReplace, "run"));

// .search ------------------------------------------------------------------>>>>>>>>>>>>>>>

// const paragraph = 'The quick brown fox?';

// const regex = /[^\w\s]/g;

// console.log(paragraph.search(regex));


// console.log(paragraph[paragraph.search(regex)]);

// console.log(paragraph[4]);

// .slice ------------------------------------------------------------------>>>>>>>>>>>>>>>

// const str = 'The quick brown fox jumps over the lazy dog.';

// const retrievedWord = str.slice(4,9);
// const retrievedWord1 = str.slice(-4);

// console.log(retrievedWord);
// console.log(retrievedWord1);

// .split ------------------------------------------------------------------>>>>>>>>>>>>>>>

// const str = 'The quick brown fox jumps over the lazy dog.';

// const arrayOfStrings = str.split(" ", 4);

// console.log(arrayOfStrings);
// console.log(arrayOfStrings[3]);

// EXAMPLE 1

// function splitString(stringToSplit, separator) {
//     var arrayOfStrings = stringToSplit.split(separator);
  
//     console.log('The original string is: "' + stringToSplit + '"');
//     console.log('The separator is: "' + separator + '"');
//     console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// }
  
//   var tempestString = 'Oh brave new world that has such people in it.';
//   var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
  
//   var space = ' ';
//   var comma = ',';
  
//   splitString(tempestString, space);
//   splitString(tempestString);
//   splitString(monthString, comma);

// .startsWith ------------------------------------------------------------------>>>>>>>>>>>>>>>

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.startsWith('quick', 4));

// .substring ------------------------------------------------------------------>>>>>>>>>>>>>>>

// const str = "mozilla";

// console.log(str.substring(1, 3));
// console.log(str.substring(2));

// .toLocaleLowerCase() & .toLocaleUpperCase() ----------------------------------->>>>>>>>>>>>>>>

// var dotted = 'İstanbul';
// var city = 'istanbul';

// console.log('EN-US: ' + dotted.toLocaleLowerCase('en-US'));

// console.log('TR: ' + dotted.toLocaleLowerCase('tr'));

// console.log('EN-US: ' + city.toLocaleUpperCase('en-US'));

// console.log('TR: ' + city.toLocaleUpperCase('tr'));

// .toLowerCase() & .toUpperCase() ----------------------------------------------->>>>>>>>>>>>>>>

// const sentence = "MY name is Marlon and I will BE LOWE CASE";

// const lower = sentence.toLowerCase();
// const upper = sentence.toUpperCase();

// console.log(lower);
// console.log(upper);

// toString() & valueOf()---------------------------------------------------------->>>>>>>>>>>>>>>

// const stringObj = new String("foo");

// console.log(stringObj);

// const newString = stringObj.toString();
// const newString1 = stringObj.toString();

// console.log(newString);
// console.log(newString1);

// trim() , trimEnd() & trimStart()--------------------------------------------------->>>>>>>>>>>>>>>

// const myDirtyString = "           Hello I am           ";

// console.log(myDirtyString.trim());
// console.log(myDirtyString.trimEnd()); // or trimRight();
// console.log(myDirtyString.trimStart()); // or trimLeft();

// String.raw() --------------------------------------------------->>>>>>>>>>>>>>>


// Create a variable that uses a Windows
// path without escaping the backslashes:
// const filePath = String.raw`C:\Development\profile\aboutme.html`;

// console.log('The file was uploaded from: ' + filePath);
// expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

// [@@iterator]() --------------------------------------------------->>>>>>>>>>>>>>>

// const str = 'The quick red fox jumped over the lazy dog\'s back.';

// let iterator = str[Symbol.iterator]();
// let theChar = iterator.next();

// console.log(theChar);

// while(!theChar.done && theChar.value !== ' ') {
//   console.log(theChar.value);
//   theChar = iterator.next();
  // expected output: "T"
  //                  "h"
  //                  "e"
// }  