// forEach, find, filter, some, every, reduce
// forEach
// Object prototype
Array.prototype.testMethod1 = 1;
Array.prototype.testMethod1 = function() {
};

Array.prototype.forEach2 = function (callback){
    for (var index in this) {
        console.log('index: ', index);
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(courses);

courses.forEach2(function(course, index, array){
    console.log(course, index, array);
});
