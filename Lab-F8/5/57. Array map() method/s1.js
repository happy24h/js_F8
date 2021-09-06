/*
Array methods:
forEach()
every()
some()
find()
filter()
map()
reduce()
 */
var courses = [
    {
        id: 1,
        name: ' Javascript',
        coin: 0,

    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200,

    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 320
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 480
    },
];

//gọi trực tiếp function vào trong map()
var newCourses = courses.map(function (course) {
    return course;

});
console.log(newCourses);
//>
// [
//     { id: 1, name: ' Javascript', coin: 0 },
//     { id: 2, name: 'HTML, CSS', coin: 200 },
//     { id: 3, name: 'Ruby', coin: 0 },
//     { id: 4, name: 'PHP', coin: 320 },
//     { id: 5, name: 'ReactJS', coin: 480 }
// ]


// gọi lại function qua map
function  courseHandler(course, index) {
    // không return value
    // map sẽ trả ra từng ô trống trong biến (array và object = undefined)
}
var newCourses = courses.map(courseHandler)
console.log(newCourses);
// [ undefined, undefined, undefined, undefined, undefined ]


function courseHandler1(course) {
    // return lại value trong 1 object để có key và value
    return {
        name: `Khóa học: ${course.name}`
    }
}
var newCourses1 = courses.map(courseHandler1);

console.log(newCourses1);
//>
// [
//     { name: 'Khóa học:  Javascript' },
//     { name: 'Khóa học: HTML, CSS' },
//     { name: 'Khóa học: Ruby' },
//     { name: 'Khóa học: PHP' },
//     { name: 'Khóa học: ReactJS' }
// ]
