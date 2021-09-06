/*
Làm việc với Array
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing (slice)
8. Concat
9. Slicing (slice)
 */

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];
console.log(languages);
console.log(languages.toString());
console.log(languages.join(' - '));
console.log(languages.pop());
console.log(languages.push('Dart','Java'));
console.log(languages.shift());
console.log(languages.unshift('Dart', 'Java'));
console.log(languages.splice(1,1, 'Dart'));
var languages2 = [
    'Java',
    'Dart'
];
console.log(languages2.concat(languages));
console.log(languages.slice(1, 2));