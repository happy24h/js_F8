/*
Kiểu dữ liệu trong javascript
1. Dữ liệu nguyên thủy - Primitive Data
 - number
 - string
 - boolean
 - undefined
 - null
 - symbol

 2. Dữ liệu phức tạp - Complex DAta
 - Function
 - Object
*/
// number type
var a = 1;
var b = 2;
var c = 1.5;
console.log(typeof a);// kiem tra cac kieu du kieu

//String type
var fullname = 'viet anh';
console.log(typeof fullname); // kiem tra du lieu

// boolean type
var isSuccess = true ;

// Undefined type
var age;

// null
var isNull = null; //nothing

// symbol
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique

// Function
var myFunction = function () {
    alert('HI. Xin chao cac ban');
}
// Object types
var myObject = {
    name: 'viet anh',
    age: 18,
    adress: 'ha noi',
    myFunction: function () {

    }
};

var myArray = [
    'javascript',
    'php',
    'ruby'
];