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
        coin: 1,

    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 0
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 12
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 11
    },
];
function courseHandler(course, index) {
    // console.log(course);
    // return course.name;
    return `<h2>${course.name}</h2>`;
    /*
    return {

        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: course

    };
     */
}

var newCourses = courses.map(courseHandler);

// console.log(newCourses);
console.log(newCourses.join(''));