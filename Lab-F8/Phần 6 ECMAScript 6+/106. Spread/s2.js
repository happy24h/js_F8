// Spread : truyền đi\
// - truyền đi 1 biến ...object vào object khác (tao object va truyen ...object )
// - truyền đi phần  ...rest  tham số trong object

var array1 = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [...array1, ...array2];

console.log(array3);// array1 + array2;
//> [ 'Javascript', 'Ruby', 'PHP', 'ReactJS', 'Dart' ];

var object1 = {
    name: 'Javascript'
};
var object2 = {
    price: 1000
}
var object3 = {
    // name: 'Javascript',
    // price: 1000
    ...object1,
    ...object2
};
console.log(object3); //> { name: 'Javascript', price: 1000 }

var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other',
};

var exerciseConfig = {
    // {api: 'https://domain-trang-khoa-hoc',
    // apiVersion: 'v1',
    // other: 'other',} //> đây là value cua   ...defaultConfig,
    ...defaultConfig,
    api: 'https://domai-trang-bao-tap' // ghi đè api ở trên
}
console.log(exerciseConfig);
//> { api: 'https://domai-trang-bao-tap',
//    apiVersion: 'v1',
//    other: 'other'
//  }

//
var array = ['Javascript', 'PHP', 'Ruby'];
function logger(a, b, c) {
    console.log(a,b,c);
}
logger(...array); //> Javascript PHP Ruby

var array = ['Javascript','PHP', 'Ruby', 'React', 'Nodejs'];
function logger(...rest) {
    for(var i = 0 ; i < rest.length; i++) {
        console.log(rest[i]); //...rest là định nghĩa ra tham số
    }
}
logger(...array); // ...array là định nghĩa object và array
//> Javascript
//> PHP
//> Ruby
//> React
//> Nodejs

//  Note :
//  Rest parameters định nghĩa tham số(...rest)
//  Spread định nghĩa array hoặc object(...array hoặc ...object)







