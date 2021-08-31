var array4 = ['js' ,'php', 'ruby'];
var [a, ...rest] = array4;

console.log(a) //> js
console.log(rest) //> [ 'php', 'ruby' ]

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',

};
var {name, price, image} = course
console.log(name, price, image) //> Javascript 1000 image-address

var {name, ...rest } = course
console.log(name) //> Javascript
console.log(rest) //> { price: 1000, image: 'image-address' }


var {name, ...newObject} = course;
console.log(newObject); //tất cả trong object được in, còn name thì không
//> { price: 1000, image: 'image-address' }




