// Callback - phần 2?

// 1. là hàm
// 2. truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số )

Array.prototype.map2 = function(callback) {
    // console.log(this);
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        callback(this[i], i);

    }
}
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
courses.map2(function (course, index){
    console.log( course, index);

});
// courses.map(function(course){
//     console.log(course);
//
// });
/*
function myFunction(course) {
    console.log(course);
}
courses.map(myFunction);

 */
/*
var htmls = courses.map(function (course){
    return`<h2>${course}</h2>`;
});
console.log(htmls.join(''));

 */

// var htmls = courses.map2(function (course){
//     return`<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));


