'use strict';

{
  let leapYear = year => {
    if (year % 4 == 0 && year % 100 != 0 || year == 400) {
      return console.log(`${year}年は、閏年です。`);
    } else {
      return console.log(`${year}年は、閏年です。`);
    }
  };
  leapYear(2020);
  leapYear(2021);
}