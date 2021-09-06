// 1. Định nghĩa key : value cho object
// 2. Định nghĩa metho cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

var course = {
    name: name,
    price: price
};
console.log(course);
//> { name: 'Javascript', price: 1000 }


var course = {
    name,
    price
};
console.log(course);
//> { name: 'Javascript', price: 1000 }


var name = 'Javascript';
var price = 1000;

//
// cách 1
var course1 = {
    name,
    price,
    getName: function () {
        return name;
    }
};
console.log(course1.getName());
//> Javascript

// cách 2
var course1 = {
    name,
    price,
    getName() {
        return name;
    }
};
console.log(course1.getName());
//> Javascript

//
// Định nghĩa key cho Object dưới dạng biến
var fieldName = 'New-name';
var fieldPrice = 'price';

const course2 = {
    name: 'PHP',
    [fieldName]: 'Javascript', //> name: 'Javascript'
    [fieldPrice]: 1000 //> price: 1000;
};

console.log(course2);
//> { name: 'PHP', 'New-name': 'Javascript', price: 1000 }

