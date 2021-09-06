// Destructuring :  Phá hủy
// rest parameters : thông số phần còn lại
// rest : còn lại
var array = ['Javascript', 'php', 'ruby']
var a = array[0]
var b = array[1]
var c = array[2]

console.log(a, b, c) //> Javascript php ruby


var array1 = ['Javascript', 'Php', 'Ruby'];
[x, y, z] = array1;
console.log(x ,y, z ) //> Javascript Php Ruby


var array2 = ['Java', 'Javascript', 'Php'];
var [x ,  ,z] = array2;
console.log(x , z) //> Java Php


var array3 = ['Javascript', 'Php ', 'Ruby'];
[a, ...rest] = array3;
console.log(a);//> Javascript
console.log(rest);//> ['Php ', 'Ruby']




