// Date Object

var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1, date2);

const today = new Date();
const date3 = new Date(2013, 2, 1, 2, 70, 100, 1000000);
// year, monthIndex, day, hours, minutes, seconds, milliseconds

console.log(today);
console.log(date3);

// Date Object Methods