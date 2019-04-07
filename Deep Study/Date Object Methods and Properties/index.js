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

// Date.getUTCDay() ---------------------------------------------------------------------------->
console.log(today.getUTCDay()); // gets day accoring to universal time

// Date.getUTCFullYear() ---------------------------------------------------------------------------->
console.log(today.getUTCFullYear()); // gets year accoring to universal time

// Date.getUTCHours() ---------------------------------------------------------------------------->
console.log(today.getUTCHours()); // gets hours accoring to universal time

// Date.getUTCMilliseconds() ---------------------------------------------------------------------------->
console.log(today.getUTCMilliseconds()); // gets milliseconds accoring to universal time

// Date.getUTCMinutes() ---------------------------------------------------------------------------->
console.log(today.getUTCMinutes()); // gets minutes accoring to universal time

// Date.getUTCMonth() ---------------------------------------------------------------------------->
console.log(today.getUTCMonth()); // gets month accoring to universal time - 0 based index 0=jan 11=dec

// Date.getUTCSeconds() ---------------------------------------------------------------------------->
console.log(today.getUTCSeconds()); // gets seconds accoring to universal time

// Date.setDate() ---------------------------------------------------------------------------->
console.log(today.setDate(30)); // sets the day of the Date object relative to the beginning of the currently set month. if a month has 30 days and you input 31 it jumps on the next month and show the number of days extra in this case 1 

console.log(today.getDate());
console.log(today.getMonth());
 
// Date.prototype.setFullYear() // sets year
// Date.prototype.setHours() // sets hour and returns number of miliseconds
// Date.prototype.setMilliseconds() // sets milliseconds for a specified date
// Date.prototype.setMinutes() // sets minutes for a specified date
// Date.prototype.setMonth() // sets month for a specified date
// Date.prototype.setSeconds() // sets seconds for a specified date

// for the set UTCs date, fullyear, hours, milliseconds, minutes, month, seconds
// ------> works the same as the above methods to set date but for the universal time

// Date.prototype.setUTCDate()
// Date.prototype.setUTCFullYear()
// Date.prototype.setUTCHours()
// Date.prototype.setUTCMilliseconds()
// Date.prototype.setUTCMinutes()
// Date.prototype.setUTCMonth()
// Date.prototype.setUTCSeconds()

// Date.setTime() ----------------------------------------------------------------------------
// method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
var event1 = new Date('July 1, 1999');
var event2 = new Date();
event2.setTime(event1.getTime());

console.log(event1);
// expected output: Thu Jul 01 1999 00:00:00 GMT+0200 (CEST)
console.log(event2);

// Date.toDateString() -------------------------------------------------------------------------

var event = new Date(1993, 6, 28, 14, 39, 7); // transforms this into ---->
console.log(event.toString()); // -----> To a string that is not that easily understandable
console.log(event.toDateString()); // -----> To human readable string
console.log(event.toISOString()); // -----> To simplified extended ISO format
console.log('-----------------------------------------------------------------------')
var jsonDate = event.toJSON();
console.log(jsonDate); // -----> method returns a string representation of the Date object.
console.log(new Date(jsonDate).toUTCString());

// Date.toLocaleDateString() -------------------------------------------------------------------------

// lets your format the date for different languages through locales with specific options -> returns string

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(event.toLocaleDateString('de-DE', options));
console.log(event.toLocaleDateString('ar-EG', options));
console.log(event.toLocaleDateString('ko-KR', options));

console.log('---------')

// Date.toLocaleString() -------------------------------------------------------------------------

// lets your format the date for different languages through locales with specific options -> returns string

console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));

console.log('---------')

// Date.toLocaleTimeString() -------------------------------------------------------------------------

// lets your format the date for different languages through locales with specific options --> for the specific portion of the date (hour, minutes, milliseconds)

console.log(event.toLocaleTimeString('en-US'));
// expected output: 1:15:30 AM
console.log(event.toLocaleTimeString('it-IT'));
// expected output: 01:15:30
console.log(event.toLocaleTimeString('ar-EG'));
// expected output: ١٢

// -----------------------
// Date.prototype.toSource() // non standard returns the source code of the object
// -----------------------

console.log('---------')

// Date.toString() -------------------------------------------------------------------------
var event1 = new Date('August 19, 1975 23:15:30');
console.log(event1.toString()); // to string non understandable
console.log(event1.toTimeString()); // human readable string form in American English. for the time
console.log(event1.toUTCString()); // to reaable string using the UTC
console.log(event1.valueOf()); // returns the date objects primitive type --> which is the number of seconds since 1 January 1970 00:00:00 UTC same as Date.prototype.getTime()