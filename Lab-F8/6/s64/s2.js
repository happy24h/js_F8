// Callback - phần 2?

// 1. là hàm
// 2. truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số )

Array.prototype.map2 = function(callback) {
    // console.log(this);
    var output = [],arrayLength = this.length ;// viet tat var
    // var arrayLength = this.length; khong viet tat var
    for (var i = 0; i < arrayLength; ++i) {
       var result = callback(this[i], i);
     output.push(result);
    }

    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
var htmls = courses.map2(function (course,){
    return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));

// forEach2, reduce2, find2, filter2
