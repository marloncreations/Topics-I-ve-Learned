// Date Object

// var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

// var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

// console.log(date1, date2);

const today = new Date();
// const date3 = new Date(2013, 2, 1, 2, 70, 100, 1000000);
// // value, dateString -> // year, monthIndex, day, hours, minutes, seconds, milliseconds

// console.log(today);
// console.log(date3);

// Date Object Methods

// Date.now() ----------------------------------------------------------------------------------->

// console.log(Date.now()); // number of miliseconds since 1970

// const start = Date.now();

// console.log("starting timer...");

// const millis = Date.now() - start;

// setTimeout(function() {
//     var millis = Date.now() - start;
  
//     console.log("seconds elapsed = " + Math.floor(millis/1000));   // STATIC METHOD
//     // expected output : seconds elapsed = 2
//   }, 3000);

// Date.UTC() ----------------------------------------------------------------------------------->

// var utcDate1 = new Date(Date.UTC(96, 1, 7, 8, 110, 60));

// console.log(utcDate1);
// console.log(utcDate1.toUTCString()); // universal time  // STATIC METHOD

// Date.parse() ----------------------------------------------------------------------------------->
/*
var unixTimeZero = Date.parse('02 Jan 1970 00:00:00 GMT');
var javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT'); // STATIC METHOD

console.log(unixTimeZero);
// expected output: 0

console.log(javaScriptRelease);
// expected output: 818035920000
*/

// Date.prototype.getDate() ----------------------------------------------------------------------->

// Date.now() ----------------------------------------------------------------------------------->

// Date.now() ----------------------------------------------------------------------------------->

// Date.now() ----------------------------------------------------------------------------------->

// Date.now() ----------------------------------------------------------------------------------->

