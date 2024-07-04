// problems :
// https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/

console.log("------------------------assignment 1-------------------------");
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ip2 = /(\d+|\D+)+/ig;
console.log(ip.match(ip2));


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 2-------------------------");
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNames2 = /\b(Os)\d*O/g;
console.log(specialNames.match(specialNames2));


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 3-------------------------");
let phone = "+(995)-123 (4567)";
let phone2 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(phone2));

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
console.log("------------------------assignment 4-------------------------");
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

  // `https?` matches "http" or "https"
  // `:\/\/` matches the colon and two forward slashes
  // `(?:[-\w]+\.)?` is a non-capturing group that matches an optional subdomain
  // `[-\w]+` matches one or more characters that are either a hyphen or a word character (alphanumeric plus underscore)
  // `\.` matches a period
  // `\w+` matches one or more word characters (alphanumeric plus underscore)
  // `(?:\.\w+)?` is a non-capturing group that matches an optional additional domain extension
  // `\/?.*` matches an optional forward slash and any remaining characters
  // `\/?` matches an optional forward slash
  // `.*` matches any remaining characters (including none)
  // the `i` flag at the end makes the regex case-insensitive


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 5-------------------------");
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
let dateRe = /\d{2}\s?-?\s?\/?\d{2}\s?-?\s?\/?\d{2,}/g; 
console.log(date1.match(dateRe)); 
console.log(date2.match(dateRe)); 
console.log(date3.match(dateRe));
console.log(date4.match(dateRe)); 

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 6-------------------------");
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let re = /(https?:\/\/)?([\w]+\.)?([\w]+)\.\w+(\.\w+)?\/?.*/g; 
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));









