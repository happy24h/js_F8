var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    },
    // description: 'description value'
};
// var {name, children: {name}} = course
// console.log(name);

var { name: parentName, children: { name: childrenName }} = course
console.log(parentName) //> Javascript
console.log(childrenName) //> ReactJS

var { name, description = 'default description'} = course
// description = value (gán value trực tiếp nếu course ko có description)
console.log(name) //> Javascript
console.log(description) //> default description (gán value trực tiếp)
//> description value (key value trong course)
function logger(...params){
    console.log(params);
}
(logger(1,2,3,4,5,6,7,8));// Trả về kiểu array
//> [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
