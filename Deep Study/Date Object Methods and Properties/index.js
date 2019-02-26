// Date Object

// var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

// var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

// console.log(date1, date2);

// const today = new Date();
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
const today = new Date();
console.log(today.getDate()); //retrieves day of the month 1 - 31

// Date.getDay() ----------------------------------------------------------------------------------->
console.log(today.getDay()); //retrieves day of the week // Sunday - Saturday : 0 - 6
// console.log(new Intl.DateTimeFormat('en-US', options).format(today)); // get the day in string format

// Date.getFullYear() ----------------------------------------------------------------------------------->
console.log(today.getFullYear()); // gets year

// Date.getHours() ----------------------------------------------------------------------------------->
console.log(today.getHours()); // gets hours

// Date.getMilliseconds() ---------------------------------------------------------------------------->
console.log(today.getMilliseconds()); // gets miliseconds

// Date.getMinutes() ---------------------------------------------------------------------------->
console.log(today.getMinutes()); // gets minutes

// Date.getMonth() ---------------------------------------------------------------------------->
console.log(today.getMonth()); // gets month , zero based value 0 - 11

// Date.getSeconds() ---------------------------------------------------------------------------->
console.log(today.getSeconds()); // gets seconds  0 - 59

// Date.getTime() ---------------------------------------------------------------------------->
console.log(today.getTime()); //  returns milliseconds since 1970 // same for all the time zones

// Date.getTimezoneOffset() ---------------------------------------------------------------------------->
console.log(today.getTimezoneOffset()); //method returns the time zone difference, in minutes, from current locale (host system settings) to UTC.

var date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
console.log(date1.getTimezoneOffset());

var date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');
console.log(date2.getTimezoneOffset());

var difference = date1.getTimezoneOffset() === date2.getTimezoneOffset();
console.log(difference);

// Date.getUTCDate() ---------------------------------------------------------------------------->
console.log(today.getUTCDate()); // gets day of the month according to universal time
