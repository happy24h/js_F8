// forEach, find, filter, some, every, reduce

// filter
Array.prototype.filter2 = function(callback) {
    var output = [];

  for (var index in this){
      if (this.hasOwnProperty(index)){
          var resutl = callback(this[index], index);
          // callback(this [index], index, this);
          if(result) {
              output.push(this[index]);

          }
      }
  }
  return output;
}
var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

// var courses = new Array(100000);
var filterCourses = courses.filter(function(course, index,array){
    // console.log(course,index,array);
    return course.coin > 700;
});
console.log(filterCourses);