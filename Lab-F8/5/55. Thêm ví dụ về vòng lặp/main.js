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
        name: 'Javascript',
        coin: 1
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
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

// var isFree = courses.find(function(course, index){
//console.log(index);
// return course.coin === 0;
//console.log(isFree);
    var listCourse = courses.filter(function(course, index){

        return course.name === 'Ruby';
    });
    console.log(listCourse);

