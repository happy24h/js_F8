// làm việc với chuỗi

var myString = 'Hoc JS tai f8';

// Keyword:  Javascript string methods

// 1. Length
// console.log(myString.length)
// 2. Find index
// console.log(myString.indexOf('JS'))
// 3. Cut string
// 4. Replace
// 5. Convert to upper case
// 6. Convert to lower case
// 7. Trim
// 8. Split
// 9. Get a character by index
console.log(myString.slice(4));
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'javascript'));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.trim());
console.log(myString.trim().length);

var languages = 'Javascript ,PHP ,Ruby' ;
console.log(languages.split(','))

const myString2 = 'Son Dang';
console.log(myString2.charAt(0));
