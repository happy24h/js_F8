// some: true / false
var courses = new Array(100);

var result = courses.some(function(course, index,array){
    // console.log(course);
    return course.isFinish;
});

console.log(result);

